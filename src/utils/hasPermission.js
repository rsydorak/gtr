const hasPermission = (permissions, action) =>
  permissions && permissions.find(permission => permission.permission === action);

export default hasPermission;
