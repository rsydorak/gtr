"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAdmin = require("react-admin");

var _Inputs = _interopRequireDefault(require("./Inputs"));

var _SimpleInputs = _interopRequireDefault(require("./SimpleInputs"));

var _CustomLayout = _interopRequireDefault(require("./CustomLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var hiddenStyle = {
  display: 'none'
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["label", "icon", "value"]);

  return rest;
};

var FormTab =
/*#__PURE__*/
function (_Component) {
  _inherits(FormTab, _Component);

  function FormTab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderHeader", function (_ref2) {
      var className = _ref2.className,
          label = _ref2.label,
          icon = _ref2.icon,
          value = _ref2.value,
          translate = _ref2.translate,
          rest = _objectWithoutProperties(_ref2, ["className", "label", "icon", "value", "translate"]);

      return _react.default.createElement(_Tab.default, _extends({
        key: label,
        label: translate(label),
        value: value,
        icon: icon,
        className: (0, _classnames.default)('form-tab', className)
      }, sanitizeRestProps(rest)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function (rest) {
      var children = rest.children,
          basePath = rest.basePath,
          record = rest.record,
          resource = rest.resource,
          hidden = rest.hidden;
      return _react.default.createElement("span", {
        style: hidden ? hiddenStyle : null
      }, _react.default.createElement(_this.getComponent(), {
        basePath: basePath,
        record: record,
        resource: resource
      }, children));
    });

    return _this;
  }

  _createClass(FormTab, [{
    key: "getComponent",
    value: function getComponent() {
      var children = this.props.children;
      var firstElement = _react.Children.count(children) === 1 ? children : children[0];

      if (_Inputs.default.includes(firstElement.type)) {
        return _SimpleInputs.default;
      }

      return _CustomLayout.default; // todo: also add some validation for Content children
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          context = _this$props.context,
          rest = _objectWithoutProperties(_this$props, ["children", "context"]);

      return context === 'header' ? this.renderHeader(rest) : this.renderContent(_objectSpread({
        children: children
      }, rest));
    }
  }]);

  return FormTab;
}(_react.Component);

FormTab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  context: PropTypes.oneOf(['header', 'content']),
  hidden: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  value: PropTypes.number,
  translate: PropTypes.func.isRequired
};
FormTab.displayName = 'FormTab';

var _default = (0, _reactAdmin.translate)(FormTab);

exports.default = _default;
module.exports = exports.default;