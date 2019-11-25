"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("./list"));

var _create = _interopRequireDefault(require("./create"));

var _show = _interopRequireDefault(require("./show"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(createPurchaseTokenName) {
  return {
    list: _list.default,
    create: (0, _create.default)(createPurchaseTokenName),
    show: _show.default
  };
};

exports.default = _default;
module.exports = exports.default;