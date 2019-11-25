import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { translate as RaTranslate } from 'react-admin';
import { compose } from 'redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { withStyles } from '@material-ui/core/styles';
import StripeCheckoutForm from './StripeCheckoutForm';
import { getPurchaseTotalPrice } from '../calculationMethods';

const styles = {
  alignRight: {
    textAlign: 'right',
  },
};

const PaymentDialog = ({
  open,
  createPurchaseTokenName,
  toggleModal,
  translate,
  classes,
  productsData,
  purchaseProducts,
}) => {
  const totalPrice = getPurchaseTotalPrice(purchaseProducts, productsData);

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
      <Dialog open={open} disableBackdropClick fullWidth keepMounted>
        <DialogTitle>{translate('empeek.utils.ra.purchases.stripePaymentForm')}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.alignRight}>
            {`${translate('empeek.utils.ra.purchases.totalPurchasePrice')}: $${totalPrice}`}
          </DialogContentText>
          <Elements>
            <StripeCheckoutForm totalPrice={totalPrice} createPurchaseTokenName={createPurchaseTokenName} />
          </Elements>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleModal(false)} color="primary">
            {translate('ra.action.cancel')}
          </Button>
        </DialogActions>
      </Dialog>
    </StripeProvider>
  );
};

PaymentDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  purchaseProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsData: PropTypes.objectOf(PropTypes.object).isRequired,
  translate: PropTypes.func.isRequired,
  createPurchaseTokenName: PropTypes.func,
};

export default compose(
  RaTranslate,
  withStyles(styles),
)(PaymentDialog);
