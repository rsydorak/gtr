"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var requireAccessRights = function requireAccessRights(permissionName, redirectRoute) {
  return function (WrappedComponent) {
    return function (props) {
      return _react.default.createElement(_reactAdmin.WithPermissions, {
        location: props.location,
        match: props.match,
        render: function render(_ref) {
          var permissions = _ref.permissions;

          if (permissions && permissions.list && permissions.list.find(function (permission) {
            return permission.name === permissionName;
          })) {
            return _react.default.createElement(WrappedComponent, _extends({
              permissions: permissions
            }, props));
          } else if (permissions && redirectRoute) {
            /*
              permissions is null on first load even if data is already loaded
              it`s a strange behavior from WithPermissions component
            */
            return _react.default.createElement(_reactRouterDom.Redirect, {
              to: redirectRoute
            });
          }

          return null;
        }
      });
    };
  };
};

var _default = requireAccessRights;
exports.default = _default;
module.exports = exports.default;