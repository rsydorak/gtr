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

var _ForgotPasswordForm = _interopRequireDefault(require("./forms/ForgotPasswordForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ForgotPassword = function ForgotPassword(_ref) {
  var autoHideDuration = _ref.autoHideDuration,
      fetchStartAction = _ref.fetchStartAction,
      fetchEndAction = _ref.fetchEndAction,
      showNotificationAction = _ref.showNotificationAction,
      additionalButtons = _ref.additionalButtons,
      fieldName = _ref.fieldName,
      fieldLabel = _ref.fieldLabel,
      fieldValidation = _ref.fieldValidation,
      submitButtonText = _ref.submitButtonText,
      resource = _ref.resource,
      redirectPath = _ref.redirectPath,
      successMessage = _ref.successMessage,
      failureMessage = _ref.failureMessage,
      dataProvider = _ref.dataProvider;

  var forgotPassword =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(values) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchStartAction();
              _context.prev = 1;
              _context.next = 4;
              return dataProvider(_reactAdmin.CREATE, resource, {
                data: {
                  email: values[fieldName],
                  redirectPath: redirectPath
                }
              });

            case 4:
              if (successMessage) {
                showNotificationAction(successMessage);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              showNotificationAction(failureMessage || _context.t0.message, 'error');

            case 10:
              fetchEndAction();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function forgotPassword(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_PageLayout.default, {
    autoHideDuration: autoHideDuration
  }, _react.default.createElement(_ForgotPasswordForm.default, {
    forgotPassword: forgotPassword,
    additionalButtons: additionalButtons,
    fieldName: fieldName,
    fieldLabel: fieldLabel,
    fieldValidation: fieldValidation,
    submitButtonText: submitButtonText
  }));
};

ForgotPassword.propTypes = {
  autoHideDuration: _propTypes.default.number,
  fetchStartAction: _propTypes.default.func.isRequired,
  fetchEndAction: _propTypes.default.func.isRequired,
  showNotificationAction: _propTypes.default.func.isRequired,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  fieldName: _propTypes.default.string.isRequired,
  fieldLabel: _propTypes.default.string.isRequired,
  fieldValidation: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.func)]),
  submitButtonText: _propTypes.default.string,
  resource: _propTypes.default.string.isRequired,
  redirectPath: _propTypes.default.string.isRequired,
  successMessage: _propTypes.default.string,
  failureMessage: _propTypes.default.string,
  dataProvider: _propTypes.default.func.isRequired
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(null, {
  fetchStartAction: _reactAdmin.fetchStart,
  fetchEndAction: _reactAdmin.fetchEnd,
  showNotificationAction: _reactAdmin.showNotification
}), _reactAdmin.withDataProvider)(ForgotPassword);

exports.default = _default;
module.exports = exports.default;