"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("./list"));

var _forms = require("./forms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  list: _list.default,
  create: _forms.Create,
  edit: _forms.Edit
};
exports.default = _default;
module.exports = exports.default;