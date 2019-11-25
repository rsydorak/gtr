"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _reactRouterDom = require("react-router-dom");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _queryString = _interopRequireDefault(require("query-string"));

var _PageLayout = _interopRequireDefault(require("./PageLayout"));

var _ResetPasswordForm = _interopRequireDefault(require("./forms/ResetPasswordForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ResetPassword = function ResetPassword(_ref) {
  var autoHideDuration = _ref.autoHideDuration,
      fetchStartAction = _ref.fetchStartAction,
      fetchEndAction = _ref.fetchEndAction,
      showNotificationAction = _ref.showNotificationAction,
      location = _ref.location,
      successMessage = _ref.successMessage,
      additionalButtons = _ref.additionalButtons,
      fieldName = _ref.fieldName,
      fieldLabel = _ref.fieldLabel,
      fieldValidation = _ref.fieldValidation,
      secondFieldName = _ref.secondFieldName,
      secondFieldLabel = _ref.secondFieldLabel,
      secondFieldValidation = _ref.secondFieldValidation,
      submitButtonText = _ref.submitButtonText,
      resource = _ref.resource,
      dataProvider = _ref.dataProvider,
      tokenName = _ref.tokenName;

  var resetPassword =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(values) {
      var parsed;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parsed = _queryString.default.parse(location.search);
              fetchStartAction();
              _context.prev = 2;
              _context.next = 5;
              return dataProvider(_reactAdmin.CREATE, resource, {
                data: {
                  password: values[fieldName],
                  token: parsed[tokenName]
                }
              });

            case 5:
              if (successMessage) {
                showNotificationAction(successMessage);
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              showNotificationAction(_context.t0.message, 'error');

            case 11:
              fetchEndAction();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    }));

    return function resetPassword(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_PageLayout.default, {
    autoHideDuration: autoHideDuration
  }, _react.default.createElement(_ResetPasswordForm.default, {
    resetPassword: resetPassword,
    additionalButtons: additionalButtons,
    fieldName: fieldName,
    fieldLabel: fieldLabel,
    fieldValidation: fieldValidation,
    secondFieldName: secondFieldName,
    secondFieldLabel: secondFieldLabel,
    secondFieldValidation: secondFieldValidation,
    submitButtonText: submitButtonText
  }));
};

ResetPassword.defaultProps = {
  tokenName: 'token'
};
ResetPassword.propTypes = {
  autoHideDuration: _propTypes.default.number,
  fetchStartAction: _propTypes.default.func.isRequired,
  fetchEndAction: _propTypes.default.func.isRequired,
  showNotificationAction: _propTypes.default.func.isRequired,
  location: _propTypes.default.instanceOf(Object),
  successMessage: _propTypes.default.string,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  fieldName: _propTypes.default.string.isRequired,
  fieldLabel: _propTypes.default.string.isRequired,
  fieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  secondFieldName: _propTypes.default.string.isRequired,
  secondFieldLabel: _propTypes.default.string.isRequired,
  secondFieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  submitButtonText: _propTypes.default.string,
  resource: _propTypes.default.string.isRequired,
  dataProvider: _propTypes.default.func.isRequired,
  tokenName: _propTypes.default.string
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(null, {
  fetchStartAction: _reactAdmin.fetchStart,
  fetchEndAction: _reactAdmin.fetchEnd,
  showNotificationAction: _reactAdmin.showNotification
}), _reactAdmin.withDataProvider, _reactRouterDom.withRouter)(ResetPassword);

exports.default = _default;
module.exports = exports.default;