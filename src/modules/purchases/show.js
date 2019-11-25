import React from 'react';
import {
  Show as RaShow,
  ArrayField,
  Datagrid,
  ReferenceField,
  TextField,
  NumberField,
  FunctionField,
  translate as RaTranslate,
} from 'react-admin';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProductTotalPrice, getPurchaseTotalPrice } from './calculationMethods';

const PurchaseTotalPriceTitle = ({ record, productsData }) => {
  // should be there checker because if we refresh page on Show  we'd got `undefined` at first few iterations
  if (!record) {
    return '';
  }
  return `${record.code} Purchase Price: $${getPurchaseTotalPrice(record.products, productsData)}`;
};

const Show = ({ dispatch, productsData, translate, ...props }) => (
  <RaShow {...props} title={<PurchaseTotalPriceTitle productsData={productsData} />}>
    <ArrayField source="products">
      <Datagrid>
        <ReferenceField
          reference="products"
          source="productId"
          label={translate('empeek.utils.ra.purchases.productName')}
          linkType={false}
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField source="quantity" />
        <ReferenceField
          reference="products"
          source="productId"
          linkType={false}
          label={translate('empeek.utils.ra.purchases.pricePerUnit')}
        >
          <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
        </ReferenceField>
        <FunctionField
          label={translate('empeek.utils.ra.purchases.numberOfProducts')}
          render={record => `$${getProductTotalPrice(record, productsData)}`}
        />
      </Datagrid>
    </ArrayField>
  </RaShow>
);

const mapStateToProps = ({
  admin: {
    resources: {
      products: { data },
    },
  },
}) => ({ productsData: data });

export default compose(
  RaTranslate,
  connect(mapStateToProps),
)(Show);
