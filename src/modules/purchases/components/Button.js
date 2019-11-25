import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { translate as RaTranslate } from 'react-admin';

const PurchaseButton = ({ disabled, translate, toggleModal }) => {
  return (
    <Button disabled={disabled} variant="contained" onClick={() => toggleModal(true)}>
      {translate('empeek.utils.ra.purchases.payOrder')}
    </Button>
  );
};

PurchaseButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default RaTranslate(PurchaseButton);
