"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var handleDelete = function handleDelete(_ref) {
  var record = _ref.record,
      dataProvider = _ref.dataProvider,
      dispatch = _ref.dispatch;
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var id;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = record.id;
              _context.prev = 1;
              _context.next = 4;
              return dataProvider(_reactAdmin.UPDATE, 'users', {
                id: id,
                data: _objectSpread({}, record, {
                  roleId: null
                })
              });

            case 4:
              dispatch((0, _reactAdmin.showNotification)('empeek.utils.ra.roles.userRemoved'));
              dispatch({
                type: _reactAdmin.REFRESH_VIEW
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              dispatch((0, _reactAdmin.showNotification)(_context.t0.messsage, 'warning'));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))
  );
};

var DeleteButton = function DeleteButton(_ref3) {
  var dataProvider = _ref3.dataProvider,
      dispatch = _ref3.dispatch,
      record = _ref3.record,
      translate = _ref3.translate;
  return _react.default.createElement(_Button.default, {
    color: "secondary",
    onClick: handleDelete({
      dataProvider: dataProvider,
      record: record,
      dispatch: dispatch
    })
  }, _react.default.createElement(_Delete.default, null), translate('ra.action.delete'));
};

DeleteButton.propTypes = {
  dataProvider: _propTypes.default.func.isRequired,
  dispatch: _propTypes.default.func.isRequired,
  record: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.array])),
  translate: _propTypes.default.func.isRequired
};

var _default = (0, _reactAdmin.translate)(DeleteButton);

exports.default = _default;
module.exports = exports.default;