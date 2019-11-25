import React, { Component, Children } from 'react';
import * as PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import classnames from 'classnames';
import { translate as RaTranslate } from 'react-admin';

import Inputs from './Inputs';
import SimpleInputs from './SimpleInputs';
import CustomLayout from './CustomLayout';

const hiddenStyle = { display: 'none' };

const sanitizeRestProps = ({ label, icon, value, ...rest }) => rest;

class FormTab extends Component {
  getComponent() {
    const { children } = this.props;
    const firstElement = Children.count(children) === 1 ? children : children[0];
    if (Inputs.includes(firstElement.type)) {
      return SimpleInputs;
    }
    return CustomLayout;
    // todo: also add some validation for Content children
  }

  renderHeader = ({ className, label, icon, value, translate, ...rest }) => {
    return (
      <Tab
        key={label}
        label={translate(label)}
        value={value}
        icon={icon}
        className={classnames('form-tab', className)}
        {...sanitizeRestProps(rest)}
      />
    );
  };

  renderContent = rest => {
    const { children, basePath, record, resource, hidden } = rest;
    return (
      <span style={hidden ? hiddenStyle : null}>
        {React.createElement(this.getComponent(), { basePath, record, resource }, children)}
      </span>
    );
  };

  render() {
    const { children, context, ...rest } = this.props;
    return context === 'header' ? this.renderHeader(rest) : this.renderContent({ children, ...rest });
  }
}

FormTab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  context: PropTypes.oneOf(['header', 'content']),
  hidden: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  value: PropTypes.number,
  translate: PropTypes.func.isRequired,
};

FormTab.displayName = 'FormTab';

export default RaTranslate(FormTab);
