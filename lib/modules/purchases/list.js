"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PurchaseList = function PurchaseList(_ref) {
  var translate = _ref.translate,
      props = _objectWithoutProperties(_ref, ["translate"]);

  return _react.default.createElement(_reactAdmin.List, props, _react.default.createElement(_reactAdmin.Datagrid, null, _react.default.createElement(_reactAdmin.TextField, {
    source: "id"
  }), _react.default.createElement(_reactAdmin.TextField, {
    source: "code"
  }), _react.default.createElement(_reactAdmin.FunctionField, {
    label: translate('empeek.utils.ra.purchases.numberOfProducts'),
    render: function render(_ref2) {
      var products = _ref2.products;
      return products.length;
    }
  }), _react.default.createElement(_reactAdmin.ShowButton, null)));
};

var _default = (0, _reactAdmin.translate)(PurchaseList);

exports.default = _default;
module.exports = exports.default;