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

const SignUpForm = ({ classes, isLoading, handleSubmit, signUp, additionalButtons, fields, translate }) => (
  <form onSubmit={handleSubmit(signUp)}>
    <div className={classes.form}>
      {fields.map(field => (
        <div className={classes.input} key={field.name}>
          <Field
            name={field.name}
            component={renderTextField}
            label={translate(field.label)}
            validate={field.validate}
            type={field.type || 'text'}
          />
        </div>
      ))}
    </div>

    <CardActions>
      <Button variant="raised" type="submit" color="primary" disabled={isLoading} className={classes.button}>
        {isLoading && <CircularProgress size={25} thickness={2} />}
        {translate('empeek.utils.ra.auth.signUp')}
      </Button>
    </CardActions>

    {additionalButtons.map(button => (
      <CardActions key={button.text}>
        <FormLinkButton button={button} />
      </CardActions>
    ))}
  </form>
);

SignUpForm.defaultProps = {
  additionalButtons: [],
};

SignUpForm.propTypes = {
  ...formPropTypes,
  classes: PropTypes.objectOf(PropTypes.string),
  signUp: PropTypes.func.isRequired,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  reduxForm({ form: 'SIGN_UP' }),
);

export default enhance(SignUpForm);
