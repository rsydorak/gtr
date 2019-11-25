"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAdmin = require("react-admin");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _calculationMethods = require("./calculationMethods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PurchaseTotalPriceTitle = function PurchaseTotalPriceTitle(_ref) {
  var record = _ref.record,
      productsData = _ref.productsData;

  // should be there checker because if we refresh page on Show  we'd got `undefined` at first few iterations
  if (!record) {
    return '';
  }

  return "".concat(record.code, " Purchase Price: $").concat((0, _calculationMethods.getPurchaseTotalPrice)(record.products, productsData));
};

var Show = function Show(_ref2) {
  var dispatch = _ref2.dispatch,
      productsData = _ref2.productsData,
      translate = _ref2.translate,
      props = _objectWithoutProperties(_ref2, ["dispatch", "productsData", "translate"]);

  return _react.default.createElement(_reactAdmin.Show, _extends({}, props, {
    title: _react.default.createElement(PurchaseTotalPriceTitle, {
      productsData: productsData
    })
  }), _react.default.createElement(_reactAdmin.ArrayField, {
    source: "products"
  }, _react.default.createElement(_reactAdmin.Datagrid, null, _react.default.createElement(_reactAdmin.ReferenceField, {
    reference: "products",
    source: "productId",
    label: translate('empeek.utils.ra.purchases.productName'),
    linkType: false
  }, _react.default.createElement(_reactAdmin.TextField, {
    source: "name"
  })), _react.default.createElement(_reactAdmin.TextField, {
    source: "quantity"
  }), _react.default.createElement(_reactAdmin.ReferenceField, {
    reference: "products",
    source: "productId",
    linkType: false,
    label: translate('empeek.utils.ra.purchases.pricePerUnit')
  }, _react.default.createElement(_reactAdmin.NumberField, {
    source: "price",
    options: {
      style: 'currency',
      currency: 'USD'
    }
  })), _react.default.createElement(_reactAdmin.FunctionField, {
    label: translate('empeek.utils.ra.purchases.numberOfProducts'),
    render: function render(record) {
      return "$".concat((0, _calculationMethods.getProductTotalPrice)(record, productsData));
    }
  }))));
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var data = _ref3.admin.resources.products.data;
  return {
    productsData: data
  };
};

var _default = (0, _redux.compose)(_reactAdmin.translate, (0, _reactRedux.connect)(mapStateToProps))(Show);

exports.default = _default;
module.exports = exports.default;