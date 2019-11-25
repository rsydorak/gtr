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

const ResetPasswordForm = ({
  classes,
  resetPassword,
  handleSubmit,
  isLoading,
  additionalButtons,
  fieldName,
  fieldLabel,
  fieldValidation,
  secondFieldName,
  secondFieldLabel,
  secondFieldValidation,
  translate,
}) => {
  return (
    <form onSubmit={handleSubmit(resetPassword)}>
      <div className={classes.form}>
        <div className={classes.input}>
          <Field
            name={fieldName}
            component={renderTextField}
            label={translate(fieldLabel)}
            type="password"
            validate={fieldValidation}
          />
        </div>

        <div className={classes.input}>
          <Field
            name={secondFieldName}
            component={renderTextField}
            label={translate(secondFieldLabel)}
            type="password"
            validate={secondFieldValidation}
          />
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
};

ResetPasswordForm.defaultProps = {
  additionalButtons: [],
};

ResetPasswordForm.propTypes = {
  ...formPropTypes,
  classes: PropTypes.objectOf(PropTypes.string),
  resetPassword: PropTypes.func.isRequired,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  secondFieldName: PropTypes.string.isRequired,
  secondFieldLabel: PropTypes.string.isRequired,
  secondFieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  translate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.admin.loading > 0,
});

export default compose(
  RaTranslate,
  withStyles(styles),
  connect(
    mapStateToProps,
    null,
  ),
  reduxForm({ form: 'RESET_PASSWORD' }),
)(ResetPasswordForm);
