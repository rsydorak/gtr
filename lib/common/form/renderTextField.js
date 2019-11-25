"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderTextField = function renderTextField(_ref) {
  var translate = _ref.translate,
      _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === void 0 ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      inputProps = _ref.input,
      props = _objectWithoutProperties(_ref, ["translate", "meta", "input"]);

  return _react.default.createElement(_TextField.default, _extends({
    error: touched && error,
    helperText: touched && !!error && translate(error)
  }, inputProps, props, {
    fullWidth: true
  }));
};

renderTextField.propTypes = {
  input: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.number])).isRequired,
  meta: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.bool, _propTypes.default.func])).isRequired
};

var _default = (0, _reactAdmin.translate)(renderTextField);

exports.default = _default;
module.exports = exports.default;