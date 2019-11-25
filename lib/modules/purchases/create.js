"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _toolbar = _interopRequireDefault(require("./components/toolbar"));

var _MultiColumnForm = require("../../MultiColumnForm");

var _TableFormIterator = _interopRequireDefault(require("../../TableFormIterator"));

var _PaymentDialog = _interopRequireDefault(require("./components/PaymentDialog"));

var _calculationMethods = require("./calculationMethods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var onChange = function onChange(_ref) {
  var products = _ref.products,
      change = _ref.change,
      getSource = _ref.getSource,
      showNotification = _ref.showNotification,
      productsData = _ref.productsData,
      productId = _ref.productId;
  return function (_, id) {
    /**
     * We need this timeout because by default redux-form triger  *change by default*
     * which lead to wrong data representation.
     * So when we wrap in *setTimeout* we execute our *change* after default *change*
     */
    if (productId === id) return;
    products.forEach(function (product) {
      /** There maybe a case where `data[id].price === undefined`
       *  So we need check with two equals signs. undefined == null ~> true
       */
      if (productsData[id].price == null) {
        showNotification('empeek.utils.ra.purchases.priceError', 'warning');
        setTimeout(function () {
          return change(getSource('productId'), null);
        });
        return;
      }

      if (product.productId === id) {
        showNotification('empeek.utils.ra.purchases.productAddError', 'warning');
        setTimeout(function () {
          return change(getSource('productId'), null);
        });
      }
    });
  };
};

var Create = function Create(_ref2) {
  var asyncValidate = _ref2.asyncValidate,
      purchaseProducts = _ref2.purchaseProducts,
      translate = _ref2.translate,
      staticContext = _ref2.staticContext,
      change = _ref2.change,
      showNotification = _ref2.showNotification,
      productsData = _ref2.productsData,
      createPurchaseTokenName = _ref2.createPurchaseTokenName,
      props = _objectWithoutProperties(_ref2, ["asyncValidate", "purchaseProducts", "translate", "staticContext", "change", "showNotification", "productsData", "createPurchaseTokenName"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      toggleModal = _useState2[1];

  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_PaymentDialog.default, {
    toggleModal: toggleModal,
    open: showModal,
    purchaseProducts: purchaseProducts,
    productsData: productsData,
    createPurchaseTokenName: createPurchaseTokenName
  }), _react.default.createElement(_MultiColumnForm.Form, _extends({}, props, {
    toolbar: _react.default.createElement(_toolbar.default, {
      toggleModal: toggleModal
    })
  }), _react.default.createElement(_reactAdmin.ArrayInput, {
    source: "products"
  }, _react.default.createElement(_TableFormIterator.default, null, _react.default.createElement(_reactAdmin.FormDataConsumer, null, function (_ref3) {
    var getSource = _ref3.getSource,
        products = _ref3.formData.products,
        productId = _ref3.scopedFormData.productId;
    return _react.default.createElement(_reactAdmin.ReferenceInput, {
      resource: "purchases",
      label: translate('empeek.utils.ra.purchases.productName'),
      reference: "products",
      source: getSource('productId'),
      allowEmpty: true,
      onChange: onChange({
        products: products,
        change: change,
        getSource: getSource,
        showNotification: showNotification,
        productsData: productsData,
        productId: productId
      })
    }, _react.default.createElement(_reactAdmin.AutocompleteInput, {
      optionText: function optionText(item) {
        return item.name && item.name.trim() || '';
      },
      focusInputOnSuggestionClick: false
    }));
  }), _react.default.createElement(_reactAdmin.FormDataConsumer, null, function (_ref4) {
    var getSource = _ref4.getSource;
    return _react.default.createElement(_reactAdmin.NumberInput, {
      source: getSource('quantity'),
      label: translate('empeek.utils.ra.purchases.quantity')
    });
  }), _react.default.createElement(_reactAdmin.FormDataConsumer, null, function (_ref5) {
    var getSource = _ref5.getSource,
        scopedFormData = _ref5.scopedFormData;
    // for preventing throw warning into console
    getSource(null);
    return _react.default.createElement(_reactAdmin.ReferenceField, {
      basePath: "/",
      reference: "products",
      record: scopedFormData,
      source: "productId",
      allowEmpty: true,
      linkType: false
    }, _react.default.createElement(_reactAdmin.Labeled, {
      label: translate('empeek.utils.ra.purchases.pricePerUnit')
    }, _react.default.createElement(_reactAdmin.NumberField, {
      source: "price",
      options: {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2
      }
    })));
  }), _react.default.createElement(_reactAdmin.FormDataConsumer, null, function (_ref6) {
    var getSource = _ref6.getSource,
        scopedFormData = _ref6.scopedFormData;
    // for preventing throw warning into console
    getSource(null);
    var totalPrice = (0, _calculationMethods.getProductTotalPrice)(scopedFormData, productsData);
    return _react.default.createElement(_reactAdmin.Labeled, {
      label: translate('empeek.utils.ra.purchases.totalPrice')
    }, Number.isNaN(totalPrice) || !totalPrice ? null : _react.default.createElement("span", null, "$".concat(totalPrice)));
  })))));
};

Create.propTypes = {
  showNotification: _propTypes.default.func.isRequired,
  change: _propTypes.default.func.isRequired,
  createPurchaseTokenName: _propTypes.default.func
};

var mapStateToProps = function mapStateToProps(_ref7) {
  var purchase = _ref7.form.purchase,
      data = _ref7.admin.resources.products.data;
  return {
    productsData: data,
    purchaseProducts: ((purchase || {}).values || {}).products || []
  };
};

Create = (0, _redux.compose)(_reactAdmin.translate, (0, _reactRedux.connect)(mapStateToProps, {
  showNotification: _reactAdmin.showNotification
}), (0, _reduxForm.reduxForm)({
  form: 'purchase'
}))(Create);

var _default = function _default(createPurchaseTokenName) {
  return function (props) {
    return _react.default.createElement(_reactAdmin.Create, props, _react.default.createElement(Create, {
      redirect: "list",
      createPurchaseTokenName: createPurchaseTokenName
    }));
  };
};

exports.default = _default;
module.exports = exports.default;