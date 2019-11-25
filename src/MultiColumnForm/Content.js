import React, { Children, Component } from 'react';
import * as PropTypes from 'prop-types';

import SimpleInputs from './SimpleInputs';
import TabbedInputs from './TabbedInputs';
import Inputs from './Inputs';
import CustomLayout from './CustomLayout';
import FormTab from './FormTab';

export const positions = { MAIN: 'main', SIDE: 'side', BOTTOM: 'bottom' };

class Content extends Component {
  getComponent() {
    const { children } = this.props;
    const firstElement = Children.count(children) === 1 ? children : children[0];
    if (firstElement.type === FormTab) {
      return TabbedInputs;
    }
    if (Inputs.includes(firstElement.type)) {
      return SimpleInputs;
    }
    return CustomLayout;
    // todo: also add some validation for Content children
  }

  render() {
    const { children, basePath, record, resource, position } = this.props;
    return React.createElement(
      this.getComponent(),
      {
        basePath,
        record,
        resource,
        position,
      },
      children,
    );
  }
}

Content.propTypes = {
  position: PropTypes.oneOf(Object.values(positions)).isRequired,
  basePath: PropTypes.string,
  children: PropTypes.node.isRequired,
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string,
};

export default Content;
