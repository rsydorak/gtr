import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { translate as RaTranslate } from 'react-admin';

const renderTextField = ({ translate, meta: { touched, error } = {}, input: inputProps, ...props }) => (
  <TextField
    error={touched && error}
    helperText={touched && !!error && translate(error)}
    {...inputProps}
    {...props}
    fullWidth
  />
);

renderTextField.propTypes = {
  input: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.number])).isRequired,
  meta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.func]))
    .isRequired,
};

export default RaTranslate(renderTextField);
