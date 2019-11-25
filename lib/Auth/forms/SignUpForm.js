"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactAdmin = require("react-admin");

var _FormLinkButton = _interopRequireDefault(require("../components/FormLinkButton"));

var _renderTextField = _interopRequireDefault(require("../../common/form/renderTextField"));

var _styles2 = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SignUpForm = function SignUpForm(_ref) {
  var classes = _ref.classes,
      isLoading = _ref.isLoading,
      handleSubmit = _ref.handleSubmit,
      signUp = _ref.signUp,
      additionalButtons = _ref.additionalButtons,
      fields = _ref.fields,
      translate = _ref.translate;
  return _react.default.createElement("form", {
    onSubmit: handleSubmit(signUp)
  }, _react.default.createElement("div", {
    className: classes.form
  }, fields.map(function (field) {
    return _react.default.createElement("div", {
      className: classes.input,
      key: field.name
    }, _react.default.createElement(_reduxForm.Field, {
      name: field.name,
      component: _renderTextField.default,
      label: translate(field.label),
      validate: field.validate,
      type: field.type || 'text'
    }));
  })), _react.default.createElement(_core.CardActions, null, _react.default.createElement(_core.Button, {
    variant: "raised",
    type: "submit",
    color: "primary",
    disabled: isLoading,
    className: classes.button
  }, isLoading && _react.default.createElement(_core.CircularProgress, {
    size: 25,
    thickness: 2
  }), translate('empeek.utils.ra.auth.signUp'))), additionalButtons.map(function (button) {
    return _react.default.createElement(_core.CardActions, {
      key: button.text
    }, _react.default.createElement(_FormLinkButton.default, {
      button: button
    }));
  }));
};

SignUpForm.defaultProps = {
  additionalButtons: []
};
SignUpForm.propTypes = _objectSpread({}, _reduxForm.formPropTypes, {
  classes: _propTypes.default.objectOf(_propTypes.default.string),
  signUp: _propTypes.default.func.isRequired,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  fields: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  translate: _propTypes.default.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.admin.loading > 0
  };
};

var enhance = (0, _redux.compose)(_reactAdmin.translate, (0, _styles.withStyles)(_styles2.default), (0, _reactRedux.connect)(mapStateToProps, null), (0, _reduxForm.reduxForm)({
  form: 'SIGN_UP'
}));

var _default = enhance(SignUpForm);

exports.default = _default;
module.exports = exports.default;