"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var hasPermission = function hasPermission(permissions, action) {
  return permissions && permissions.find(function (permission) {
    return permission.permission === action;
  });
};

var _default = hasPermission;
exports.default = _default;
module.exports = exports.default;