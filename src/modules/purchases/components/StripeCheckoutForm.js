import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { showNotification, translate as RaTranslate } from 'react-admin';

const styles = theme => ({
  margin: {
    marginTop: theme.spacing.unit * 1.5,
  },
});

const handlePurchase = ({ stripe, totalPrice, dispatch, createPurchaseTokenName }) => async () => {
  const name = createPurchaseTokenName ? createPurchaseTokenName({ total: totalPrice }) : 'Default purchase name';

  const { token } = await stripe.createToken({ name });

  const response = await fetch('/charge', {
    method: 'POST',
    headers: { 'Content-Type': 'Text/plain' },
    body: JSON.stringify({ token: token.id, amount: totalPrice }),
  });
  if (!response.ok) {
    dispatch(showNotification('empeek.utils.ra.purchases.paymentFailed', 'warning'));
    return;
  }
  dispatch(showNotification('empeek.utils.ra.purchases.paymentSuccess', 'warning'));
};

const StripeCheckoutForm = ({ classes, dispatch, createPurchaseTokenName, stripe, translate, totalPrice }) => (
  <Fragment>
    <CardElement />
    <Button
      className={classes.margin}
      onClick={handlePurchase({ stripe, totalPrice, dispatch, createPurchaseTokenName })}
      color="primary"
      variant="contained"
    >
      {translate('empeek.utils.ra.purchases.payOrder')}
    </Button>
  </Fragment>
);

StripeCheckoutForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  translate: PropTypes.func.isRequired,
  createPurchaseTokenName: PropTypes.func,
};

export default compose(
  RaTranslate,
  connect(),
  withStyles(styles),
  injectStripe,
)(StripeCheckoutForm);
