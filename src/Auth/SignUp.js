import React from 'react';
import PropTypes from 'prop-types';
import { CREATE, fetchStart, fetchEnd, showNotification, withDataProvider } from 'react-admin';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PageLayout from './PageLayout';
import SignUpForm from './forms/SignUpForm';

const SignUp = ({
  autoHideDuration,
  fetchStartAction,
  fetchEndAction,
  showNotificationAction,
  successMessage,
  additionalButtons,
  fields,
  submitButtonText,
  resource,
  dataProvider,
}) => {
  const signUp = async values => {
    fetchStartAction();

    try {
      await dataProvider(CREATE, resource, {
        data: { ...values },
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
      <SignUpForm
        signUp={signUp}
        additionalButtons={additionalButtons}
        fields={fields}
        submitButtonText={submitButtonText}
      />
    </PageLayout>
  );
};

SignUp.propTypes = {
  autoHideDuration: PropTypes.number,
  fetchStartAction: PropTypes.func.isRequired,
  fetchEndAction: PropTypes.func.isRequired,
  showNotificationAction: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  additionalButtons: PropTypes.arrayOf(PropTypes.object),
  submitButtonText: PropTypes.string,
  resource: PropTypes.string.isRequired,
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
)(SignUp);
