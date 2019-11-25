"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _reactRouterDom = require("react-router-dom");

var _redux = require("redux");

var _reactAdmin = require("react-admin");

var _styles2 = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLinkButton = function FormLinkButton(_ref) {
  var button = _ref.button,
      classes = _ref.classes,
      translate = _ref.translate;
  return _react.default.createElement(_reactRouterDom.Link, {
    to: {
      pathname: button.pathname
    },
    className: classes.link
  }, _react.default.createElement(_core.Button, {
    className: classes.button,
    fullWidth: true
  }, translate(button.text)));
};

FormLinkButton.propTypes = {
  button: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  translate: _propTypes.default.func.isRequired,
  classes: _propTypes.default.objectOf(_propTypes.default.string)
};

var _default = (0, _redux.compose)(_reactAdmin.translate, (0, _styles.withStyles)(_styles2.default))(FormLinkButton);

exports.default = _default;
module.exports = exports.default;