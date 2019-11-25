"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.authLogin = void 0;

var _reactAdmin = require("react-admin");

var _utils = require("../utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authLogin =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, params, saveTokens, loginErrorMessage) {
    var request, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request = new Request(url, {
              method: 'POST',
              body: JSON.stringify(params),
              headers: (0, _utils.getHeaders)()
            });
            _context.next = 3;
            return fetch(request);

          case 3:
            response = _context.sent;

            if (!(response.status === 401 || response.status === 403)) {
              _context.next = 6;
              break;
            }

            throw new Error(loginErrorMessage);

          case 6:
            if (!(response.status < 200 || response.status >= 300)) {
              _context.next = 8;
              break;
            }

            throw response.statusText;

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;
            saveTokens(data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authLogin(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.authLogin = authLogin;

var fetchPermissions =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url, clearTokens) {
    var request, response, permissions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            request = new Request(url, {
              method: 'GET',
              headers: (0, _utils.getHeaders)(true)
            });
            _context2.next = 3;
            return fetch(request);

          case 3:
            response = _context2.sent;

            if (!(response.status < 200 || response.status >= 300)) {
              _context2.next = 7;
              break;
            }

            clearTokens();
            throw new Error(response.statusText);

          case 7:
            _context2.next = 9;
            return response.json();

          case 9:
            permissions = _context2.sent;
            localStorage.setItem('permissions', JSON.stringify(permissions));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchPermissions(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = function _default(_ref3, _ref4, loginErrorMessage) {
  var authorizationUrl = _ref3.authorizationUrl,
      permissionsUrl = _ref3.permissionsUrl;
  var _ref4$saveTokens = _ref4.saveTokens,
      saveTokens = _ref4$saveTokens === void 0 ? _utils.saveTokens : _ref4$saveTokens,
      _ref4$clearTokens = _ref4.clearTokens,
      clearTokens = _ref4$clearTokens === void 0 ? _utils.clearTokens : _ref4$clearTokens,
      _ref4$hasTokens = _ref4.hasTokens,
      hasTokens = _ref4$hasTokens === void 0 ? _utils.hasTokens : _ref4$hasTokens,
      getPermissions = _ref4.getPermissions;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(type, params) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = type;
                _context3.next = _context3.t0 === _reactAdmin.AUTH_LOGIN ? 3 : _context3.t0 === _reactAdmin.AUTH_LOGOUT ? 9 : _context3.t0 === _reactAdmin.AUTH_ERROR ? 11 : _context3.t0 === _reactAdmin.AUTH_CHECK ? 12 : _context3.t0 === _reactAdmin.AUTH_GET_PERMISSIONS ? 15 : 16;
                break;

              case 3:
                _context3.next = 5;
                return authLogin(authorizationUrl, params, saveTokens, loginErrorMessage);

              case 5:
                if (!permissionsUrl) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return fetchPermissions(permissionsUrl, clearTokens);

              case 8:
                return _context3.abrupt("return");

              case 9:
                clearTokens();
                return _context3.abrupt("return");

              case 11:
                return _context3.abrupt("return");

              case 12:
                if (!hasTokens()) {
                  _context3.next = 14;
                  break;
                }

                return _context3.abrupt("return");

              case 14:
                throw null;

              case 15:
                return _context3.abrupt("return", getPermissions());

              case 16:
                throw new Error('Unknown method');

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.default = _default;