import React, { Children, Component } from 'react';
import * as PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Toolbar, getDefaultValues, REDUX_FORM_NAME, translate } from 'react-admin';
import { Grid, withStyles } from '@material-ui/core';

import { positions } from './Content';

const styles = theme => ({
  formContent: {
    padding: theme.spacing.unit * 2.5,
  },
});

const sanitizeRestProps = ({
  anyTouched,
  array,
  asyncBlurFields,
  asyncValidate,
  asyncValidating,
  autofill,
  blur,
  change,
  clearAsyncError,
  clearFields,
  clearSubmit,
  clearSubmitErrors,
  destroy,
  dirty,
  dispatch,
  form,
  handleSubmit,
  initialize,
  initialized,
  initialValues,
  pristine,
  pure,
  redirect,
  reset,
  resetSection,
  save,
  submit,
  submitFailed,
  submitSucceeded,
  submitting,
  touch,
  translate,
  triggerSubmit,
  untouch,
  valid,
  validate,
  ...props
}) => props;

export class SimpleForm extends Component {
  handleSubmitWithRedirect = (redirect = this.props.redirect) => {
    const { handleSubmit, save } = this.props;
    return handleSubmit(values => save(values, redirect));
  };

  hasContentPosition = currentPosition => {
    const { children } = this.props;
    let has = false;
    Children.forEach(children, x => {
      if (((x || {}).props || {}).position === currentPosition) {
        has = true;
      }
    });
    return has;
  };

  getGridSize = content => {
    const { position } = content.props;
    switch (position) {
      case positions.MAIN:
        return this.hasContentPosition(positions.SIDE) ? 6 : 12;
      case positions.SIDE:
        return this.hasContentPosition(positions.MAIN) ? 6 : 12;
      default:
        return 12;
    }
  };

  render() {
    const {
      basePath,
      children,
      invalid,
      pristine,
      record,
      redirect,
      resource,
      saving,
      submitOnEnter,
      toolbar,
      version,
      classes,
      ...rest
    } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form key={version} {...sanitizeRestProps(rest)}>
        <Grid container spacing={24} className={classes.formContent}>
          {Children.map(
            children,
            content =>
              content && (
                <Grid item xs={this.getGridSize(content)}>
                  {React.cloneElement(content, {
                    resource,
                    record,
                    basePath,
                  })}
                </Grid>
              ),
          )}
        </Grid>
        {toolbar &&
          React.cloneElement(toolbar, {
            basePath,
            handleSubmitWithRedirect: this.handleSubmitWithRedirect,
            handleSubmit,
            invalid,
            pristine,
            record,
            redirect,
            resource,
            saving,
            submitOnEnter,
          })}
      </form>
    );
  }
}

SimpleForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  basePath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  handleSubmit: PropTypes.func, // passed by redux-form
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  record: PropTypes.object,
  resource: PropTypes.string,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
  save: PropTypes.func, // the handler defined in the parent, which triggers the REST submission
  saving: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  submitOnEnter: PropTypes.bool,
  toolbar: PropTypes.element,
  validate: PropTypes.func,
  version: PropTypes.number,
};

SimpleForm.defaultProps = {
  submitOnEnter: true,
  toolbar: <Toolbar />,
};

const enhance = compose(
  connect((state, props) => ({
    form: props.form || REDUX_FORM_NAME,
    initialValues: getDefaultValues(state, props),
    saving: props.saving || state.admin.saving,
  })),
  translate,
  reduxForm({
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
  }),
  withStyles(styles),
);

export default enhance(SimpleForm);
