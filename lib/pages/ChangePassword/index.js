"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _core = require("@material-ui/core");

var _reactAdmin = require("react-admin");

var _reduxForm = require("redux-form");

var _renderTextField = _interopRequireDefault(require("../../common/form/renderTextField"));

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var formName = 'CHANGE_PASSWORD_FORM';

var ChangePassword = function ChangePassword(_ref) {
  var handleSubmit = _ref.handleSubmit,
      _ref$classes = _ref.classes,
      paper = _ref$classes.paper,
      input = _ref$classes.input,
      saving = _ref.saving,
      resetAction = _ref.resetAction,
      fetchStartAction = _ref.fetchStartAction,
      fetchEndAction = _ref.fetchEndAction,
      showNotificationAction = _ref.showNotificationAction,
      resource = _ref.resource,
      fieldValidation = _ref.fieldValidation,
      fieldNormalize = _ref.fieldNormalize,
      secondFieldValidation = _ref.secondFieldValidation,
      secondFieldNormalize = _ref.secondFieldNormalize,
      thirdFieldValidation = _ref.thirdFieldValidation,
      thirdFieldNormalize = _ref.thirdFieldNormalize,
      successMessage = _ref.successMessage,
      dataProvider = _ref.dataProvider,
      translate = _ref.translate;

  var submit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref2) {
      var oldPassword, newPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              oldPassword = _ref2.oldPassword, newPassword = _ref2.newPassword;
              fetchStartAction();
              _context.prev = 2;
              _context.next = 5;
              return dataProvider(_reactAdmin.CREATE, resource, {
                data: {
                  oldPassword: oldPassword,
                  newPassword: newPassword
                }
              });

            case 5:
              showNotificationAction(successMessage);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              showNotificationAction(_context.t0.message, 'error');

            case 11:
              _context.prev = 11;
              fetchEndAction();
              resetAction(formName);
              return _context.finish(11);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8, 11, 15]]);
    }));

    return function submit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_core.Paper, {
    className: paper
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit(submit)
  }, _react.default.createElement("div", {
    className: input
  }, _react.default.createElement(_reduxForm.Field, {
    name: "oldPassword",
    component: _renderTextField.default,
    label: translate('empeek.utils.ra.auth.currentPassword'),
    type: "password",
    validate: fieldValidation,
    normalize: fieldNormalize
  })), _react.default.createElement("div", {
    className: input
  }, _react.default.createElement(_reduxForm.Field, {
    name: "newPassword",
    component: _renderTextField.default,
    label: translate('empeek.utils.ra.auth.newPassword'),
    type: "password",
    validate: secondFieldValidation,
    normalize: secondFieldNormalize
  })), _react.default.createElement("div", {
    className: input
  }, _react.default.createElement(_reduxForm.Field, {
    name: "confirmNewPassword",
    component: _renderTextField.default,
    label: translate('empeek.utils.ra.auth.confirmNewPassword'),
    type: "password",
    validate: thirdFieldValidation,
    normalize: thirdFieldNormalize
  })), _react.default.createElement(_core.Button, {
    variant: "raised",
    type: "submit",
    color: "primary",
    disabled: saving
  }, saving && _react.default.createElement(_core.CircularProgress, {
    size: 25,
    thickness: 2
  }), translate('ra.action.save'))));
};

ChangePassword.propTypes = _objectSpread({}, _reduxForm.propTypes, {
  classes: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  saving: _propTypes.default.bool.isRequired,
  resetAction: _propTypes.default.func.isRequired,
  fetchEndAction: _propTypes.default.func.isRequired,
  fetchStartAction: _propTypes.default.func.isRequired,
  showNotificationAction: _propTypes.default.func.isRequired,
  dataProvider: _propTypes.default.func.isRequired,
  resource: _propTypes.default.string.isRequired,
  fieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  fieldNormalize: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  secondFieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  secondFieldNormalize: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  thirdFieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  thirdFieldNormalize: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  successMessage: _propTypes.default.string,
  translate: _propTypes.default.func.isRequired
});

function mapStateToProps(state) {
  return {
    saving: (0, _reduxForm.isSubmitting)(formName)(state)
  };
}

var mapDispatchToProps = {
  resetAction: _reduxForm.reset,
  fetchEndAction: _reactAdmin.fetchEnd,
  fetchStartAction: _reactAdmin.fetchStart,
  showNotificationAction: _reactAdmin.showNotification
};
var reduxFormConfig = {
  form: formName,
  enableReinitialize: true
};
var enhance = (0, _redux.compose)(_reactAdmin.translate, (0, _styles.withStyles)(_styles2.default), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reduxForm.reduxForm)(reduxFormConfig), _reactAdmin.withDataProvider);

var _default = enhance(ChangePassword);

exports.default = _default;
module.exports = exports.default;