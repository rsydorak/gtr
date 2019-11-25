import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardActions, Button, CircularProgress } from '@material-ui/core';
import { Field, reduxForm, formPropTypes } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { translate as RaTranslate } from 'react-admin';

import FormLinkButton from '../components/FormLinkButton';
import renderTextField from '../../common/form/renderTextField';
import styles from '../styles';

const ForgotPasswordForm = ({
  classes,
  forgotPassword,
  handleSubmit,
  isLoading,
  additionalButtons,
  fieldName,
  fieldLabel,
  fieldValidation,
  translate,
}) => (
  <form onSubmit={handleSubmit(forgotPassword)}>
    <div className={classes.form}>
      <div className={classes.input}>
        <Field name={fieldName} component={renderTextField} label={translate(fieldLabel)} validate={fieldValidation} />
      </div>
    </div>

    <CardActions>
      <Button variant="raised" type="submit" color="primary" disabled={isLoading} className={classes.button}>
        {isLoading && <CircularProgress size={25} thickness={2} />}
        {translate('ra.action.confirm')}
      </Button>
    </CardActions>

    {additionalButtons.map(button => (
      <CardActions key={button.text}>
        <FormLinkButton button={button} />
      </CardActions>
    ))}
  </form>
);

ForgotPasswordForm.defaultProps = {
  additionalButtons: [],
};

ForgotPasswordForm.propTypes = {
  ...formPropTypes,
  classes: PropTypes.objectOf(PropTypes.string),
  forgotPassword: PropTypes.func.isRequired,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  submitButtonText: PropTypes.string,
  translate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.admin.loading > 0,
});

const enhance = compose(
  RaTranslate,
  withStyles(styles),
  connect(
    mapStateToProps,
    null,
  ),
  reduxForm({ form: 'FORGOT_PASSWORD' }),
);

export default enhance(ForgotPasswordForm);
