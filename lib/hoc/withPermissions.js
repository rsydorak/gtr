"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var withPermissions = function withPermissions(WrappedComponent) {
  return function (props) {
    return _react.default.createElement(_reactAdmin.WithPermissions, {
      location: props.location,
      match: props.match,
      render: function render(_ref) {
        var permissions = _ref.permissions;
        return _react.default.createElement(WrappedComponent, _extends({
          permissions: permissions
        }, props));
      }
    });
  };
};

var _default = withPermissions;
exports.default = _default;
module.exports = exports.default;