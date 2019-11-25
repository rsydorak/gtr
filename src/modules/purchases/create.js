import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Create as RaCreate,
  NumberInput,
  ArrayInput,
  FormDataConsumer,
  ReferenceInput,
  ReferenceField,
  AutocompleteInput,
  NumberField,
  Labeled,
  showNotification as RaNotification,
  translate as RaTranslate,
} from 'react-admin';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import FormToolbar from './components/toolbar';
import { Form } from '../../MultiColumnForm';
import TableFormIterator from '../../TableFormIterator';
import PaymentDialog from './components/PaymentDialog';
import { getProductTotalPrice } from './calculationMethods';

const onChange = ({ products, change, getSource, showNotification, productsData, productId }) => (_, id) => {
  /**
   * We need this timeout because by default redux-form triger  *change by default*
   * which lead to wrong data representation.
   * So when we wrap in *setTimeout* we execute our *change* after default *change*
   */
  if (productId === id) return;
  products.forEach(product => {
    /** There maybe a case where `data[id].price === undefined`
     *  So we need check with two equals signs. undefined == null ~> true
     */
    if (productsData[id].price == null) {
      showNotification('empeek.utils.ra.purchases.priceError', 'warning');
      setTimeout(() => change(getSource('productId'), null));
      return;
    }
    if (product.productId === id) {
      showNotification('empeek.utils.ra.purchases.productAddError', 'warning');
      setTimeout(() => change(getSource('productId'), null));
    }
  });
};

let Create = ({
  asyncValidate,
  purchaseProducts,
  translate,
  staticContext,
  change,
  showNotification,
  productsData,
  createPurchaseTokenName,
  ...props
}) => {
  const [showModal, toggleModal] = useState(false);
  return (
    <Fragment>
      <PaymentDialog
        toggleModal={toggleModal}
        open={showModal}
        purchaseProducts={purchaseProducts}
        productsData={productsData}
        createPurchaseTokenName={createPurchaseTokenName}
      />
      <Form {...props} toolbar={<FormToolbar toggleModal={toggleModal} />}>
        <ArrayInput source="products">
          <TableFormIterator>
            <FormDataConsumer>
              {({ getSource, formData: { products }, scopedFormData: { productId } }) => (
                <ReferenceInput
                  resource="purchases"
                  label={translate('empeek.utils.ra.purchases.productName')}
                  reference="products"
                  source={getSource('productId')}
                  allowEmpty
                  onChange={onChange({
                    products,
                    change,
                    getSource,
                    showNotification,
                    productsData,
                    productId,
                  })}
                >
                  <AutocompleteInput
                    optionText={item => (item.name && item.name.trim()) || ''}
                    focusInputOnSuggestionClick={false}
                  />
                </ReferenceInput>
              )}
            </FormDataConsumer>
            <FormDataConsumer>
              {({ getSource }) => (
                <NumberInput source={getSource('quantity')} label={translate('empeek.utils.ra.purchases.quantity')} />
              )}
            </FormDataConsumer>
            <FormDataConsumer>
              {({ getSource, scopedFormData }) => {
                // for preventing throw warning into console
                getSource(null);
                return (
                  <ReferenceField
                    basePath="/"
                    reference="products"
                    record={scopedFormData}
                    source="productId"
                    allowEmpty
                    linkType={false}
                  >
                    <Labeled label={translate('empeek.utils.ra.purchases.pricePerUnit')}>
                      <NumberField
                        source="price"
                        options={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2 }}
                      />
                    </Labeled>
                  </ReferenceField>
                );
              }}
            </FormDataConsumer>
            <FormDataConsumer>
              {({ getSource, scopedFormData }) => {
                // for preventing throw warning into console
                getSource(null);
                const totalPrice = getProductTotalPrice(scopedFormData, productsData);
                return (
                  <Labeled label={translate('empeek.utils.ra.purchases.totalPrice')}>
                    {Number.isNaN(totalPrice) || !totalPrice ? null : <span>{`$${totalPrice}`}</span>}
                  </Labeled>
                );
              }}
            </FormDataConsumer>
          </TableFormIterator>
        </ArrayInput>
      </Form>
    </Fragment>
  );
};
Create.propTypes = {
  showNotification: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  createPurchaseTokenName: PropTypes.func,
};

const mapStateToProps = ({
  form: { purchase },
  admin: {
    resources: {
      products: { data },
    },
  },
}) => ({ productsData: data, purchaseProducts: ((purchase || {}).values || {}).products || [] });

Create = compose(
  RaTranslate,
  connect(
    mapStateToProps,
    { showNotification: RaNotification },
  ),
  reduxForm({
    form: 'purchase',
  }),
)(Create);

export default createPurchaseTokenName => props => (
  <RaCreate {...props}>
    <Create redirect="list" createPurchaseTokenName={createPurchaseTokenName} />
  </RaCreate>
);
