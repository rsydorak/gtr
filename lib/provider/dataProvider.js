"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.httpClient = void 0;

var _reactAdmin = require("react-admin");

var _raDataJsonServer = _interopRequireDefault(require("ra-data-json-server"));

var _raDataFakerest = _interopRequireDefault(require("ra-data-fakerest"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchWrapper =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result,
        status,
        body,
        statusText,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch.apply(void 0, _args);

          case 2:
            result = _context.sent;
            status = result.status;

            if (!(status < 200 || status >= 300)) {
              _context.next = 7;
              break;
            }

            body = result.body, statusText = result.statusText;
            throw new _reactAdmin.HttpError(body || statusText, status, body);

          case 7:
            return _context.abrupt("return", result);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchWrapper() {
    return _ref.apply(this, arguments);
  };
}();

var httpClient = function httpClient(_ref2) {
  var apiAuthUrl = _ref2.apiAuthUrl,
      permissionsUrl = _ref2.permissionsUrl,
      clearTokens = _ref2.clearTokens,
      saveTokens = _ref2.saveTokens;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url) {
        var options,
            fetchJson,
            fetchMethod,
            result,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                fetchJson = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
                fetchMethod = fetchJson ? _reactAdmin.fetchUtils.fetchJson : fetchWrapper;
                _context2.prev = 3;
                _context2.next = 6;
                return fetchMethod(url, _objectSpread({}, options, {
                  headers: (0, _utils.getHeaders)(true)
                }));

              case 6:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);
                _context2.t1 = _context2.t0.name === 'Error';

                if (!_context2.t1) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 16;
                return (0, _utils.reauthenticateIfNeeded)({
                  apiAuthUrl: apiAuthUrl,
                  permissionsUrl: permissionsUrl
                }, _context2.t0.status, {
                  clearTokensData: clearTokens,
                  saveTokensData: saveTokens
                });

              case 16:
                _context2.t1 = _context2.sent;

              case 17:
                if (!_context2.t1) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return", fetchMethod(url, _objectSpread({}, options, {
                  headers: (0, _utils.getHeaders)(true)
                })));

              case 19:
                throw _context2.t0;

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.httpClient = httpClient;

var _default = function _default(_ref4) {
  var _ref4$fakeData = _ref4.fakeData,
      fakeData = _ref4$fakeData === void 0 ? {} : _ref4$fakeData,
      apiBaseUrl = _ref4.apiBaseUrl,
      apiAuthUrl = _ref4.apiAuthUrl,
      permissionsUrl = _ref4.permissionsUrl,
      clearTokens = _ref4.clearTokens,
      saveTokens = _ref4.saveTokens;
  var dataProvider = (0, _raDataJsonServer.default)(apiBaseUrl, httpClient({
    apiAuthUrl: apiAuthUrl,
    permissionsUrl: permissionsUrl,
    clearTokens: clearTokens,
    saveTokens: saveTokens
  }));
  var providerWithFakeData = (0, _raDataFakerest.default)(fakeData);
  return function (type, resource, params) {
    if (fakeData[resource]) {
      return providerWithFakeData(type, resource, params);
    }

    return dataProvider(type, resource, params, apiAuthUrl);
  };
};

exports.default = _default;