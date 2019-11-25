"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tokensHelper = require("./tokensHelper");

Object.keys(_tokensHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tokensHelper[key];
    }
  });
});