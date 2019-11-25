"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _styles = require("@material-ui/core/styles");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core/");

var _reactAdmin = require("react-admin");

var _FormLinkButton = _interopRequireDefault(require("../components/FormLinkButton"));

var _renderTextField = _interopRequireDefault(require("../../common/form/renderTextField"));

var _styles2 = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoginForm = function LoginForm(_ref) {
  var classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      login = _ref.login,
      isLoading = _ref.isLoading,
      fieldName = _ref.fieldName,
      fieldLabel = _ref.fieldLabel,
      fieldValidation = _ref.fieldValidation,
      secondFieldName = _ref.secondFieldName,
      secondFieldLabel = _ref.secondFieldLabel,
      secondFieldValidation = _ref.secondFieldValidation,
      additionalButtons = _ref.additionalButtons,
      translate = _ref.translate;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      toggleShowPassword = _useState2[1];

  var handleClickShowPassword = function handleClickShowPassword() {
    return toggleShowPassword(!showPassword);
  };

  return _react.default.createElement("form", {
    onSubmit: handleSubmit(login)
  }, _react.default.createElement("div", {
    className: classes.form
  }, _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_reduxForm.Field, {
    autoFocus: true,
    name: fieldName,
    component: _renderTextField.default,
    label: translate(fieldLabel),
    disabled: isLoading,
    validate: fieldValidation
  })), _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_reduxForm.Field, {
    name: secondFieldName,
    component: _renderTextField.default,
    label: translate(secondFieldLabel),
    type: showPassword ? 'text' : 'password',
    disabled: isLoading,
    validate: secondFieldValidation,
    InputProps: {
      endAdornment: _react.default.createElement(_core.InputAdornment, {
        variant: "filled",
        position: "end"
      }, _react.default.createElement(_core.IconButton, {
        "aria-label": "Toggle password visibility",
        onClick: handleClickShowPassword
      }, showPassword ? _react.default.createElement(_icons.VisibilityOff, null) : _react.default.createElement(_icons.Visibility, null)))
    }
  })), _react.default.createElement(_core.CardActions, null, _react.default.createElement(_core.Button, {
    variant: "raised",
    type: "submit",
    color: "primary",
    disabled: isLoading,
    className: classes.button
  }, isLoading && _react.default.createElement(_core.CircularProgress, {
    size: 25,
    thickness: 2
  }), translate('empeek.utils.ra.auth.signIn'))), additionalButtons.map(function (button) {
    return _react.default.createElement(_core.CardActions, {
      key: button.text
    }, _react.default.createElement(_FormLinkButton.default, {
      button: button
    }));
  })));
};

LoginForm.defaultProps = {
  additionalButtons: []
};
LoginForm.propTypes = _objectSpread({}, _reduxForm.formPropTypes, {
  classes: _propTypes.default.objectOf(_propTypes.default.string),
  isLoading: _propTypes.default.bool,
  handleSubmit: _propTypes.default.func.isRequired,
  login: _propTypes.default.func.isRequired,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  fieldName: _propTypes.default.string.isRequired,
  fieldLabel: _propTypes.default.string.isRequired,
  fieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  secondFieldName: _propTypes.default.string.isRequired,
  secondFieldLabel: _propTypes.default.string.isRequired,
  secondFieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  translate: _propTypes.default.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.admin.loading > 0
  };
};

var enhance = (0, _redux.compose)(_reactAdmin.translate, (0, _styles.withStyles)(_styles2.default), (0, _reactRedux.connect)(mapStateToProps), (0, _reduxForm.reduxForm)({
  form: 'LOGIN'
}));

var _default = enhance(LoginForm);

exports.default = _default;
module.exports = exports.default;