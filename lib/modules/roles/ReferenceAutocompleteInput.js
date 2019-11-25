"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var onChange = function onChange(_ref) {
  var dataProvider = _ref.dataProvider,
      dispatch = _ref.dispatch,
      roleId = _ref.roleId;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, id) {
        var _ref3, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return dataProvider(_reactAdmin.GET_ONE, 'users', {
                  id: id
                }, '/', false);

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;

                if (!data.roleId) {
                  _context.next = 8;
                  break;
                }

                dispatch((0, _reactAdmin.showNotification)('empeek.utils.ra.roles.userAddError', 'warning'));
                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return dataProvider(_reactAdmin.UPDATE, 'users', {
                  id: id,
                  data: _objectSpread({}, data, {
                    roleId: roleId
                  })
                });

              case 10:
                dispatch((0, _reactAdmin.showNotification)('empeek.utils.ra.roles.userAddSuccess'));
                /** We need this setTimeout with this duration. Because we update our form component with a *key*
                 So when showNotification trigers and after immediately action below. Our component unmounted and hideNotication
                 (comes out of box) wants trigers on component which currently not exist because of changing a key.
                 This lead to memory leak.
                */

                setTimeout(function () {
                  return dispatch({
                    type: _reactAdmin.REFRESH_VIEW
                  });
                }, 1000);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                dispatch((0, _reactAdmin.showNotification)(_context.t0.message, 'warning'));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var ReferenceAutocompleteInput = function ReferenceAutocompleteInput(_ref4) {
  var dataProvider = _ref4.dataProvider,
      dispatch = _ref4.dispatch,
      roleId = _ref4.roleId,
      autocompleteOptionText = _ref4.autocompleteOptionText;

  var _optionText = autocompleteOptionText || function (item) {
    return item.firstName && item.firstName.trim();
  };

  return _react.default.createElement(_reactAdmin.ReferenceInput, {
    resource: "roles",
    reference: "users",
    source: "user",
    allowEmpty: true,
    onChange: onChange({
      dataProvider: dataProvider,
      dispatch: dispatch,
      roleId: roleId
    })
  }, _react.default.createElement(_reactAdmin.AutocompleteInput, {
    optionText: function optionText(item) {
      return _optionText(item) || '';
    },
    focusInputOnSuggestionClick: false
  }));
};

ReferenceAutocompleteInput.propTypes = {
  dataProvider: _propTypes.default.func.isRequired,
  dispatch: _propTypes.default.func.isRequired,
  roleId: _propTypes.default.string.isRequired,
  autocompleteOptionText: _propTypes.default.func
};
var _default = ReferenceAutocompleteInput;
exports.default = _default;
module.exports = exports.default;