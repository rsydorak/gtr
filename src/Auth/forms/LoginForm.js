import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formPropTypes } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { CardActions, CircularProgress, Button, IconButton, InputAdornment } from '@material-ui/core/';
import { translate as RaTranslate } from 'react-admin';

import FormLinkButton from '../components/FormLinkButton';
import renderTextField from '../../common/form/renderTextField';
import styles from '../styles';

const LoginForm = ({
  classes,
  handleSubmit,
  login,
  isLoading,
  fieldName,
  fieldLabel,
  fieldValidation,
  secondFieldName,
  secondFieldLabel,
  secondFieldValidation,
  additionalButtons,
  translate,
}) => {
  const [showPassword, toggleShowPassword] = useState(false);

  const handleClickShowPassword = () => toggleShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit(login)}>
      <div className={classes.form}>
        <div className={classes.input}>
          <Field
            autoFocus
            name={fieldName}
            component={renderTextField}
            label={translate(fieldLabel)}
            disabled={isLoading}
            validate={fieldValidation}
          />
        </div>
        <div className={classes.input}>
          <Field
            name={secondFieldName}
            component={renderTextField}
            label={translate(secondFieldLabel)}
            type={showPassword ? 'text' : 'password'}
            disabled={isLoading}
            validate={secondFieldValidation}
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <CardActions>
          <Button variant="raised" type="submit" color="primary" disabled={isLoading} className={classes.button}>
            {isLoading && <CircularProgress size={25} thickness={2} />}
            {translate('empeek.utils.ra.auth.signIn')}
          </Button>
        </CardActions>

        {additionalButtons.map(button => (
          <CardActions key={button.text}>
            <FormLinkButton button={button} />
          </CardActions>
        ))}
      </div>
    </form>
  );
};

LoginForm.defaultProps = {
  additionalButtons: [],
};

LoginForm.propTypes = {
  ...formPropTypes,
  classes: PropTypes.objectOf(PropTypes.string),
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
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

const enhance = compose(
  RaTranslate,
  withStyles(styles),
  connect(mapStateToProps),
  reduxForm({ form: 'LOGIN' }),
);

export default enhance(LoginForm);
