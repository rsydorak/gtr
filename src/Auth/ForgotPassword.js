import React from 'react';
import PropTypes from 'prop-types';
import { CREATE, fetchStart, fetchEnd, showNotification, withDataProvider } from 'react-admin';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PageLayout from './PageLayout';
import ForgotPasswordForm from './forms/ForgotPasswordForm';

const ForgotPassword = ({
  autoHideDuration,
  fetchStartAction,
  fetchEndAction,
  showNotificationAction,
  additionalButtons,
  fieldName,
  fieldLabel,
  fieldValidation,
  submitButtonText,
  resource,
  redirectPath,
  successMessage,
  failureMessage,
  dataProvider,
}) => {
  const forgotPassword = async values => {
    fetchStartAction();

    try {
      await dataProvider(CREATE, resource, {
        data: { email: values[fieldName], redirectPath },
      });
      if (successMessage) {
        showNotificationAction(successMessage);
      }
    } catch (error) {
      showNotificationAction(failureMessage || error.message, 'error');
    }
    fetchEndAction();
  };

  return (
    <PageLayout autoHideDuration={autoHideDuration}>
      <ForgotPasswordForm
        forgotPassword={forgotPassword}
        additionalButtons={additionalButtons}
        fieldName={fieldName}
        fieldLabel={fieldLabel}
        fieldValidation={fieldValidation}
        submitButtonText={submitButtonText}
      />
    </PageLayout>
  );
};

ForgotPassword.propTypes = {
  autoHideDuration: PropTypes.number,
  fetchStartAction: PropTypes.func.isRequired,
  fetchEndAction: PropTypes.func.isRequired,
  showNotificationAction: PropTypes.func.isRequired,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  submitButtonText: PropTypes.string,
  resource: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  successMessage: PropTypes.string,
  failureMessage: PropTypes.string,
  dataProvider: PropTypes.func.isRequired,
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
)(ForgotPassword);
