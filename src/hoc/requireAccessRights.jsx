import React from 'react';
import { WithPermissions } from 'react-admin';
import { Redirect } from 'react-router-dom';

const requireAccessRights = (permissionName, redirectRoute) => WrappedComponent => props => (
  <WithPermissions
    location={props.location}
    match={props.match}
    render={({ permissions }) => {
      if (permissions && permissions.list && permissions.list.find(permission => permission.name === permissionName)) {
        return <WrappedComponent permissions={permissions} {...props} />;
      } else if (permissions && redirectRoute) {
        /*
          permissions is null on first load even if data is already loaded
          it`s a strange behavior from WithPermissions component
        */
        return <Redirect to={redirectRoute} />;
      }
      return null;
    }}
  />
);

export default requireAccessRights;
