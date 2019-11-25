"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueFromToken = exports.reauthenticateIfNeeded = exports.getHeaders = exports.hasTokens = exports.saveTokens = exports.clearTokens = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clearTokens = function clearTokens() {
  var keyForException = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var localStorageKeys = Object.keys(localStorage);
  localStorageKeys.forEach(function (key) {
    if (keyForException.includes(key)) return;
    delete localStorage[key];
  });
};

exports.clearTokens = clearTokens;

var saveTokens = function saveTokens() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dataKeys = Object.keys(data);
  dataKeys.forEach(function (key) {
    if (key.toLowerCase().includes('token') && key !== 'refreshToken') {
      localStorage.accessToken = data[key];
      return;
    }

    localStorage[key] = data[key];
  });
};

exports.saveTokens = saveTokens;

var hasTokens = function hasTokens() {
  return !!localStorage.accessToken && !!localStorage.username;
};

exports.hasTokens = hasTokens;

var getHeaders = function getHeaders(authenticated) {
  var headers = new Headers({
    'Content-Type': 'application/json'
  });
  if (authenticated) headers.set('Authorization', "Bearer ".concat(localStorage.accessToken));
  return headers;
};

exports.getHeaders = getHeaders;
var newTokenRequest;

var reauthenticateIfNeeded =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref, status, _ref2) {
    var apiAuthUrl, permissionsUrl, _ref2$clearTokensData, clearTokensData, _ref2$saveTokensData, saveTokensData;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            apiAuthUrl = _ref.apiAuthUrl, permissionsUrl = _ref.permissionsUrl;
            _ref2$clearTokensData = _ref2.clearTokensData, clearTokensData = _ref2$clearTokensData === void 0 ? clearTokens : _ref2$clearTokensData, _ref2$saveTokensData = _ref2.saveTokensData, saveTokensData = _ref2$saveTokensData === void 0 ? saveTokens : _ref2$saveTokensData;

            if (!(status !== 401 || !localStorage.accessToken)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", false);

          case 4:
            if (!newTokenRequest) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", newTokenRequest);

          case 6:
            newTokenRequest = new Promise(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(resolve) {
                var _localStorage, refreshToken, accessToken, request, response, data, permissionsRequest, permissonsResponse, permissions;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _localStorage = localStorage, refreshToken = _localStorage.refreshToken, accessToken = _localStorage.accessToken;
                        request = new Request(apiAuthUrl, {
                          method: 'PUT',
                          body: JSON.stringify({
                            refreshToken: refreshToken,
                            accessToken: accessToken
                          }),
                          headers: getHeaders()
                        });
                        _context.next = 4;
                        return fetch(request);

                      case 4:
                        response = _context.sent;

                        if (!(response.status < 200 || response.status >= 300)) {
                          _context.next = 11;
                          break;
                        }

                        clearTokensData();
                        window.location.href = '/#/login';
                        resolve(false);
                        newTokenRequest = null;
                        return _context.abrupt("return");

                      case 11:
                        _context.next = 13;
                        return response.json();

                      case 13:
                        data = _context.sent;
                        saveTokensData(data);

                        if (!permissionsUrl) {
                          _context.next = 31;
                          break;
                        }

                        permissionsRequest = new Request(permissionsUrl, {
                          method: 'GET',
                          headers: getHeaders(true)
                        });
                        _context.next = 19;
                        return fetch(permissionsRequest);

                      case 19:
                        permissonsResponse = _context.sent;

                        if (!(permissonsResponse.status < 200 || permissonsResponse.status >= 300)) {
                          _context.next = 27;
                          break;
                        }

                        console.error('Cant get permissions.');
                        clearTokensData();
                        window.location.href = '/#/login';
                        resolve(false);
                        newTokenRequest = null;
                        return _context.abrupt("return");

                      case 27:
                        _context.next = 29;
                        return permissonsResponse.json();

                      case 29:
                        permissions = _context.sent;
                        localStorage.setItem('permissions', JSON.stringify(permissions));

                      case 31:
                        resolve(true);
                        newTokenRequest = null;

                      case 33:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", newTokenRequest);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function reauthenticateIfNeeded(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.reauthenticateIfNeeded = reauthenticateIfNeeded;

var getValueFromToken = function getValueFromToken(accessToken, key) {
  if (accessToken) {
    var parsedToken = JSON.parse(window.atob(accessToken.split('.')[1]));
    return parsedToken[key];
  }

  return null;
};

exports.getValueFromToken = getValueFromToken;