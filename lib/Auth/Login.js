"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _PageLayout = _interopRequireDefault(require("./PageLayout"));

var _LoginForm = _interopRequireDefault(require("./forms/LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(_ref) {
  var autoHideDuration = _ref.autoHideDuration,
      userLoginAction = _ref.userLoginAction,
      fieldName = _ref.fieldName,
      fieldLabel = _ref.fieldLabel,
      fieldValidation = _ref.fieldValidation,
      secondFieldName = _ref.secondFieldName,
      secondFieldLabel = _ref.secondFieldLabel,
      secondFieldValidation = _ref.secondFieldValidation,
      loginButtonText = _ref.loginButtonText,
      additionalButtons = _ref.additionalButtons;

  var login = function login(auth, _ref2) {
    var redirectTo = _ref2.redirectTo;
    return userLoginAction(auth, redirectTo);
  };

  return _react.default.createElement(_PageLayout.default, {
    autoHideDuration: autoHideDuration
  }, _react.default.createElement(_LoginForm.default, {
    login: login,
    additionalButtons: additionalButtons,
    fieldName: fieldName,
    fieldLabel: fieldLabel,
    fieldValidation: fieldValidation,
    secondFieldName: secondFieldName,
    secondFieldLabel: secondFieldLabel,
    secondFieldValidation: secondFieldValidation,
    loginButtonText: loginButtonText
  }));
};

Login.propTypes = {
  autoHideDuration: _propTypes.default.number,
  userLoginAction: _propTypes.default.func.isRequired,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  loginButtonText: _propTypes.default.string,
  fieldName: _propTypes.default.string.isRequired,
  fieldLabel: _propTypes.default.string.isRequired,
  fieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  secondFieldName: _propTypes.default.string.isRequired,
  secondFieldLabel: _propTypes.default.string.isRequired,
  secondFieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)])
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(null, {
  userLoginAction: _reactAdmin.userLogin
}))(Login);

exports.default = _default;
module.exports = exports.default;