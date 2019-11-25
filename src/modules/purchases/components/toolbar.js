import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toolbar } from 'react-admin';
import PurchaseButton from './Button';

const FormToolbar = ({ areAllQuantitiesValid, toggleModal, dispatch, ...props }) => (
  <Toolbar {...props}>
    <PurchaseButton disabled={areAllQuantitiesValid} toggleModal={toggleModal} />
  </Toolbar>
);

FormToolbar.propTypes = {
  areAllQuantitiesValid: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  form: {
    purchase: { values },
  },
}) => ({
  areAllQuantitiesValid:
    (values.products || []).some(product => typeof product.quantity !== 'number' || product.quantity === 0) ||
    (values.products || []).length === 0,
});

export default connect(mapStateToProps)(FormToolbar);
