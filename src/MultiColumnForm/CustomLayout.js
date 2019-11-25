import React, { Children } from 'react';
import * as PropTypes from 'prop-types';

/**
 * The component is used when the children passed
 * to <FormTab> component have their own unique layout
 */

const CustomLayout = ({ basePath, children, record, resource }) =>
  Children.map(
    children,
    content =>
      content &&
      React.cloneElement(content, {
        basePath,
        record,
        resource,
      }),
  );

CustomLayout.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string,
};

export default CustomLayout;
