import React from 'react';
import PropTypes from 'prop-types';
import { userLogin } from 'react-admin';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PageLayout from './PageLayout';
import LoginForm from './forms/LoginForm';

const Login = ({
  autoHideDuration,
  userLoginAction,
  fieldName,
  fieldLabel,
  fieldValidation,
  secondFieldName,
  secondFieldLabel,
  secondFieldValidation,
  loginButtonText,
  additionalButtons,
}) => {
  const login = (auth, { redirectTo }) => userLoginAction(auth, redirectTo);

  return (
    <PageLayout autoHideDuration={autoHideDuration}>
      <LoginForm
        login={login}
        additionalButtons={additionalButtons}
        fieldName={fieldName}
        fieldLabel={fieldLabel}
        fieldValidation={fieldValidation}
        secondFieldName={secondFieldName}
        secondFieldLabel={secondFieldLabel}
        secondFieldValidation={secondFieldValidation}
        loginButtonText={loginButtonText}
      />
    </PageLayout>
  );
};

Login.propTypes = {
  autoHideDuration: PropTypes.number,
  userLoginAction: PropTypes.func.isRequired,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  loginButtonText: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  secondFieldName: PropTypes.string.isRequired,
  secondFieldLabel: PropTypes.string.isRequired,
  secondFieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
};

export default compose(
  connect(
    null,
    {
      userLoginAction: userLogin,
    },
  ),
)(Login);
