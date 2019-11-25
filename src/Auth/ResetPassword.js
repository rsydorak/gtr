import React from 'react';
import PropTypes from 'prop-types';
import { CREATE, fetchStart, fetchEnd, showNotification, withDataProvider } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';

import PageLayout from './PageLayout';
import ResetPasswordForm from './forms/ResetPasswordForm';

const ResetPassword = ({
  autoHideDuration,
  fetchStartAction,
  fetchEndAction,
  showNotificationAction,
  location,
  successMessage,
  additionalButtons,
  fieldName,
  fieldLabel,
  fieldValidation,
  secondFieldName,
  secondFieldLabel,
  secondFieldValidation,
  submitButtonText,
  resource,
  dataProvider,
  tokenName,
}) => {
  const resetPassword = async values => {
    const parsed = queryString.parse(location.search);
    fetchStartAction();

    try {
      await dataProvider(CREATE, resource, {
        data: { password: values[fieldName], token: parsed[tokenName] },
      });
      if (successMessage) {
        showNotificationAction(successMessage);
      }
    } catch (error) {
      showNotificationAction(error.message, 'error');
    }
    fetchEndAction();
  };

  return (
    <PageLayout autoHideDuration={autoHideDuration}>
      <ResetPasswordForm
        resetPassword={resetPassword}
        additionalButtons={additionalButtons}
        fieldName={fieldName}
        fieldLabel={fieldLabel}
        fieldValidation={fieldValidation}
        secondFieldName={secondFieldName}
        secondFieldLabel={secondFieldLabel}
        secondFieldValidation={secondFieldValidation}
        submitButtonText={submitButtonText}
      />
    </PageLayout>
  );
};

ResetPassword.defaultProps = {
  tokenName: 'token',
}

ResetPassword.propTypes = {
  autoHideDuration: PropTypes.number,
  fetchStartAction: PropTypes.func.isRequired,
  fetchEndAction: PropTypes.func.isRequired,
  showNotificationAction: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object),
  successMessage: PropTypes.string,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  secondFieldName: PropTypes.string.isRequired,
  secondFieldLabel: PropTypes.string.isRequired,
  secondFieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  submitButtonText: PropTypes.string,
  resource: PropTypes.string.isRequired,
  dataProvider: PropTypes.func.isRequired,
  tokenName: PropTypes.string,
};

export default compose(
  connect(
    null,
    {
      fetchStartAction: fetchStart,
      fetchEndAction: fetchEnd,
      showNotificationAction: showNotification,
    },
  ),
  withDataProvider,
  withRouter,
)(ResetPassword);
