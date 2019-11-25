import React from 'react';
import { WithPermissions } from 'react-admin';

const withPermissions = WrappedComponent => props => (
  <WithPermissions
    location={props.location}
    match={props.match}
    render={({ permissions }) => (
      <WrappedComponent permissions={permissions} {...props} />
    )}
  />
);

export default withPermissions;
