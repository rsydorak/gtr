"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactAdmin = require("react-admin");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormToolbar = function FormToolbar(_ref) {
  var areAllQuantitiesValid = _ref.areAllQuantitiesValid,
      toggleModal = _ref.toggleModal,
      dispatch = _ref.dispatch,
      props = _objectWithoutProperties(_ref, ["areAllQuantitiesValid", "toggleModal", "dispatch"]);

  return _react.default.createElement(_reactAdmin.Toolbar, props, _react.default.createElement(_Button.default, {
    disabled: areAllQuantitiesValid,
    toggleModal: toggleModal
  }));
};

FormToolbar.propTypes = {
  areAllQuantitiesValid: _propTypes.default.bool.isRequired,
  toggleModal: _propTypes.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var values = _ref2.form.purchase.values;
  return {
    areAllQuantitiesValid: (values.products || []).some(function (product) {
      return typeof product.quantity !== 'number' || product.quantity === 0;
    }) || (values.products || []).length === 0
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(FormToolbar);

exports.default = _default;
module.exports = exports.default;