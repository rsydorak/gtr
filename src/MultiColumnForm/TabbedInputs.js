import React, { Children, Component } from 'react';
import * as PropTypes from 'prop-types';
import { getFormAsyncErrors, getFormSyncErrors, getFormSubmitErrors } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import { REDUX_FORM_NAME, CardContentInner } from 'react-admin';
import { AppBar, Card } from '@material-ui/core';

const styles = theme => ({
  errorTabButton: { color: theme.palette.error.main },
});

class TabbedInputs extends Component {
  state = {
    tabIndex: 0,
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const { basePath, children, classes = {}, record, resource, tabsWithErrors } = this.props;
    const { tabIndex } = this.state;

    return (
      <Card>
        <AppBar position="static" color="default">
          <Tabs value={tabIndex} onChange={this.handleChange} scrollable scrollButtons="on">
            {Children.map(children, tab => {
              if (!tab) return null;

              return React.cloneElement(tab, {
                context: 'header',
                className: tabsWithErrors.includes(tab.props.label) ? classes.errorTabButton : null,
              });
            })}
          </Tabs>
        </AppBar>
        <Divider />
        <CardContentInner>
          {Children.map(
            children,
            (tab, index) =>
              tab &&
              React.cloneElement(tab, {
                context: 'content',
                resource,
                record,
                basePath,
                hidden: tabIndex !== index,
              }),
          )}
        </CardContentInner>
      </Card>
    );
  }
}

TabbedInputs.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string),
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string,
  tabsWithErrors: PropTypes.arrayOf(PropTypes.string),
};

const collectErrors = (state, props) => {
  const syncErrors = getFormSyncErrors(props.form)(state);
  const asyncErrors = getFormAsyncErrors(props.form)(state);
  const submitErrors = getFormSubmitErrors(props.form)(state);

  return {
    ...syncErrors,
    ...asyncErrors,
    ...submitErrors,
  };
};

export const findTabsWithErrors = (state, props, collectErrorsImpl = collectErrors) => {
  const errors = collectErrorsImpl(state, props);

  return Children.toArray(props.children).reduce((acc, child) => {
    const inputs = Children.toArray(child.props.children);

    if (inputs.some(input => errors[input.props.source])) {
      return [...acc, child.props.label];
    }

    return acc;
  }, []);
};

const enhance = compose(
  connect((state, props) => {
    return {
      tabsWithErrors: findTabsWithErrors(state, {
        form: REDUX_FORM_NAME,
        ...props,
      }),
    };
  }),
  withStyles(styles),
);

export default enhance(TabbedInputs);
