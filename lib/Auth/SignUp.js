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

var _SignUpForm = _interopRequireDefault(require("./forms/SignUpForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SignUp = function SignUp(_ref) {
  var autoHideDuration = _ref.autoHideDuration,
      fetchStartAction = _ref.fetchStartAction,
      fetchEndAction = _ref.fetchEndAction,
      showNotificationAction = _ref.showNotificationAction,
      successMessage = _ref.successMessage,
      additionalButtons = _ref.additionalButtons,
      fields = _ref.fields,
      submitButtonText = _ref.submitButtonText,
      resource = _ref.resource,
      dataProvider = _ref.dataProvider;

  var signUp =
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
                data: _objectSpread({}, values)
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
              showNotificationAction(_context.t0.message, 'error');

            case 10:
              fetchEndAction();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function signUp(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_PageLayout.default, {
    autoHideDuration: autoHideDuration
  }, _react.default.createElement(_SignUpForm.default, {
    signUp: signUp,
    additionalButtons: additionalButtons,
    fields: fields,
    submitButtonText: submitButtonText
  }));
};

SignUp.propTypes = {
  autoHideDuration: _propTypes.default.number,
  fetchStartAction: _propTypes.default.func.isRequired,
  fetchEndAction: _propTypes.default.func.isRequired,
  showNotificationAction: _propTypes.default.func.isRequired,
  successMessage: _propTypes.default.string,
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.object),
  submitButtonText: _propTypes.default.string,
  resource: _propTypes.default.string.isRequired,
  dataProvider: _propTypes.default.func.isRequired
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(null, {
  fetchStartAction: _reactAdmin.fetchStart,
  fetchEndAction: _reactAdmin.fetchEnd,
  showNotificationAction: _reactAdmin.showNotification
}), _reactAdmin.withDataProvider)(SignUp);

exports.default = _default;
module.exports = exports.default;