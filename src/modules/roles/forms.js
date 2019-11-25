import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Create as RaCreate,
  Edit as RaEdit,
  DisabledInput,
  TextInput,
  CheckboxGroupInput,
  ReferenceArrayInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  withDataProvider,
  Show,
  translate as RaTranslate,
} from 'react-admin';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Form, Content } from '../../MultiColumnForm';
import DeleteButton from './DeleteButton';
import ReferenceAutocompleteInput from './ReferenceAutocompleteInput';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const sanitizer = ({
  anyTouched,
  asyncValidate,
  asyncValidating,
  clearSubmit,
  dirty,
  handleSubmit,
  initialized,
  initialValues,
  invalid,
  pristine,
  resetSection,
  submitting,
  submitFailed,
  submitSucceeded,
  valid,
  pure,
  triggerSubmit,
  clearFields,
  clearAsyncError,
  clearSubmitErrors,
  asyncBlurFields,
  autofill,
  blur,
  change,
  destroy,
  initialize,
  reset,
  submit,
  touch,
  untouch,
  formInputs,
  showFileds,
  autocompleteOptionText,
  ...props
}) => props;

let RolesForm = ({
  isEdit,
  dataProvider,
  dispatch,
  classes,
  disabled,
  match,
  staticContext,
  asyncValidate,
  save,
  redirect,
  autocompleteOptionText,
  formInputs,
  showFileds,
  translate,
  ...props
}) => {
  const { id } = (match || {}).params || {};
  const { version } = props;
  const [value, handleChangeValue] = useState(0);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={(e, val) => handleChangeValue(val)}>
          <Tab label={translate('empeek.utils.ra.roles.role')} />
          <Tab label={translate('empeek.utils.ra.roles.users')} disabled={disabled} />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Form {...props} save={save} redirect={redirect}>
          <Content position="main">
            <DisabledInput source="id" />
            {formInputs.map(input => (
              <TextInput key={input} source={input} />
            ))}
          </Content>
          <Content position="side">
            <ReferenceArrayInput source="permissions" reference="permissions">
              <CheckboxGroupInput source="permissions" />
            </ReferenceArrayInput>
          </Content>
        </Form>
      )}
      {value === 1 && (
        /** We need this version prop here in order to force update of component
         and show up to date users when we delete them from particular role.
         Otherwise users wont gone from UI after delete.
        */
        <Show
          {...sanitizer(props)}
          id={id}
          key={version}
          actions={
            <ReferenceAutocompleteInput
              dispatch={dispatch}
              dataProvider={dataProvider}
              roleId={id}
              autocompleteOptionText={autocompleteOptionText}
            />
          }
        >
          <ReferenceManyField reference="users" target="roleId" {...props}>
            <Datagrid>
              {showFileds.map(field => (
                <TextField key={field} source={field} />
              ))}
              <DeleteButton dispatch={dispatch} dataProvider={dataProvider} />
            </Datagrid>
          </ReferenceManyField>
        </Show>
      )}
    </div>
  );
};

RolesForm.defaultProps = {
  formInputs: ['name'],
  showFileds: ['firstName', 'lastName'],
};

RolesForm.propTypes = {
  isEdit: PropTypes.bool,
  dataProvider: PropTypes.func,
  dispatch: PropTypes.func,
  disabled: PropTypes.bool,
  save: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])),
  autocompleteOptionText: PropTypes.func,
  formInputs: PropTypes.arrayOf(PropTypes.string),
  showFileds: PropTypes.arrayOf(PropTypes.string),
  translate: PropTypes.func.isRequired,
};

export const Create = ({ autocompleteOptionText, formInputs, showFileds, ...rest }) => (
  <RaCreate {...rest}>
    <RolesForm
      disabled
      redirect="list"
      autocompleteOptionText={autocompleteOptionText}
      formInputs={formInputs}
      showFileds={showFileds}
    />
  </RaCreate>
);

RolesForm = compose(
  RaTranslate,
  withDataProvider,
  withStyles(styles),
  withRouter,
  reduxForm({
    form: 'userList',
  }),
  connect(),
)(RolesForm);
export const Edit = ({ autocompleteOptionText, formInputs, showFileds, ...rest }) => (
  <RaEdit {...rest}>
    <RolesForm isEdit autocompleteOptionText={autocompleteOptionText} formInputs={formInputs} showFileds={showFileds} />
  </RaEdit>
);
