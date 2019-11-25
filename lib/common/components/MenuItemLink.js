"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _redux = require("redux");

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'flex-start'
    },
    active: {
      color: theme.palette.text.primary
    },
    icon: {
      paddingRight: '1.2em'
    },
    menuLinkText: {
      fontSize: '1rem'
    }
  };
};

var MenuItemLink = function MenuItemLink(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      primaryText = _ref.primaryText,
      leftIcon = _ref.leftIcon,
      onClick = _ref.onClick,
      to = _ref.to,
      translate = _ref.translate;

  var handleClick = function handleClick(e) {
    if (onClick) onClick(e);
  };

  return _react.default.createElement(_MenuItem.default, {
    className: className || classes.root,
    activeClassName: classes.active,
    component: _reactRouterDom.NavLink,
    onClick: handleClick,
    to: to
  }, leftIcon && _react.default.createElement("span", {
    className: classes.icon
  }, (0, _react.cloneElement)(leftIcon)), _react.default.createElement("span", {
    className: classes.menuLinkText
  }, translate(primaryText)));
};

MenuItemLink.propTypes = {
  classes: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  leftIcon: _propTypes.default.node,
  onClick: _propTypes.default.func,
  primaryText: _propTypes.default.string.isRequired,
  to: _propTypes.default.string,
  translate: _propTypes.default.func.isRequired,
  className: _propTypes.default.string
};

var _default = (0, _redux.compose)((0, _styles.withStyles)(styles), _reactAdmin.translate)(MenuItemLink);

exports.default = _default;
module.exports = exports.default;