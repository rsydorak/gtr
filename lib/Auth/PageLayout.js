"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLayout = function PageLayout(_ref) {
  var autoHideDuration = _ref.autoHideDuration,
      classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: classes.main
  }, _react.default.createElement(_core.Card, {
    className: classes.card
  }, _react.default.createElement("div", {
    className: classes.avatar
  }, _react.default.createElement(_core.Avatar, {
    className: classes.icon
  }, _react.default.createElement(_Lock.default, null))), children), _react.default.createElement(_reactAdmin.Notification, {
    autoHideDuration: autoHideDuration
  }));
};

PageLayout.defaultProps = {
  autoHideDuration: 60000
};
PageLayout.propTypes = {
  autoHideDuration: _propTypes.default.number,
  classes: _propTypes.default.objectOf(_propTypes.default.string),
  children: _propTypes.default.node.isRequired
};

var _default = (0, _styles.withStyles)(_styles2.default)(PageLayout);

exports.default = _default;
module.exports = exports.default;