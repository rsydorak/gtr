import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Paper, CircularProgress, Button } from '@material-ui/core';
import {
  CREATE,
  fetchStart,
  fetchEnd,
  showNotification,
  withDataProvider,
  translate as RaTranslate,
} from 'react-admin';
import { reduxForm, Field, propTypes as propTypesReduxForm, isSubmitting, reset } from 'redux-form';

import renderTextField from '../../common/form/renderTextField';
import styles from './styles';

const formName = 'CHANGE_PASSWORD_FORM';

const ChangePassword = ({
  handleSubmit,
  classes: { paper, input },
  saving,
  resetAction,
  fetchStartAction,
  fetchEndAction,
  showNotificationAction,
  resource,
  fieldValidation,
  fieldNormalize,
  secondFieldValidation,
  secondFieldNormalize,
  thirdFieldValidation,
  thirdFieldNormalize,
  successMessage,
  dataProvider,
  translate,
}) => {
  const submit = async ({ oldPassword, newPassword }) => {
    fetchStartAction();

    try {
      await dataProvider(CREATE, resource, {
        data: { oldPassword, newPassword },
      });
      showNotificationAction(successMessage);
    } catch (error) {
      showNotificationAction(error.message, 'error');
    } finally {
      fetchEndAction();
      resetAction(formName);
    }
  };

  return (
    <Paper className={paper}>
      <form onSubmit={handleSubmit(submit)}>
        <div className={input}>
          <Field
            name="oldPassword"
            component={renderTextField}
            label={translate('empeek.utils.ra.auth.currentPassword')}
            type="password"
            validate={fieldValidation}
            normalize={fieldNormalize}
          />
        </div>

        <div className={input}>
          <Field
            name="newPassword"
            component={renderTextField}
            label={translate('empeek.utils.ra.auth.newPassword')}
            type="password"
            validate={secondFieldValidation}
            normalize={secondFieldNormalize}
          />
        </div>

        <div className={input}>
          <Field
            name="confirmNewPassword"
            component={renderTextField}
            label={translate('empeek.utils.ra.auth.confirmNewPassword')}
            type="password"
            validate={thirdFieldValidation}
            normalize={thirdFieldNormalize}
          />
        </div>

        <Button variant="raised" type="submit" color="primary" disabled={saving}>
          {saving && <CircularProgress size={25} thickness={2} />}
          {translate('ra.action.save')}
        </Button>
      </form>
    </Paper>
  );
};

ChangePassword.propTypes = {
  ...propTypesReduxForm,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  saving: PropTypes.bool.isRequired,
  resetAction: PropTypes.func.isRequired,
  fetchEndAction: PropTypes.func.isRequired,
  fetchStartAction: PropTypes.func.isRequired,
  showNotificationAction: PropTypes.func.isRequired,
  dataProvider: PropTypes.func.isRequired,
  resource: PropTypes.string.isRequired,
  fieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  fieldNormalize: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  secondFieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  secondFieldNormalize: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  thirdFieldValidation: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  thirdFieldNormalize: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  successMessage: PropTypes.string,
  translate: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    saving: isSubmitting(formName)(state),
  };
}

const mapDispatchToProps = {
  resetAction: reset,
  fetchEndAction: fetchEnd,
  fetchStartAction: fetchStart,
  showNotificationAction: showNotification,
};

const reduxFormConfig = {
  form: formName,
  enableReinitialize: true,
};

const enhance = compose(
  RaTranslate,
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  reduxForm(reduxFormConfig),
  withDataProvider,
);

export default enhance(ChangePassword);
