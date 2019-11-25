"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RolesList = function RolesList(props) {
  return _react.default.createElement(_reactAdmin.List, props, _react.default.createElement(_reactAdmin.Datagrid, null, _react.default.createElement(_reactAdmin.TextField, {
    source: "id"
  }), _react.default.createElement(_reactAdmin.TextField, {
    source: "name"
  }), _react.default.createElement(_reactAdmin.ReferenceArrayField, {
    source: "permissions",
    reference: "permissions"
  }, _react.default.createElement(_reactAdmin.SingleFieldList, null, _react.default.createElement(_reactAdmin.ChipField, {
    source: "name"
  }))), _react.default.createElement(_reactAdmin.EditButton, null)));
};

var _default = RolesList;
exports.default = _default;
module.exports = exports.default;