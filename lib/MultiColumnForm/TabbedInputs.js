"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.findTabsWithErrors = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _styles = require("@material-ui/core/styles");

var _reactAdmin = require("react-admin");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    errorTabButton: {
      color: theme.palette.error.main
    }
  };
};

var TabbedInputs =
/*#__PURE__*/
function (_Component) {
  _inherits(TabbedInputs, _Component);

  function TabbedInputs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabbedInputs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabbedInputs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      tabIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, tabIndex) {
      _this.setState({
        tabIndex: tabIndex
      });
    });

    return _this;
  }

  _createClass(TabbedInputs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          basePath = _this$props.basePath,
          children = _this$props.children,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          record = _this$props.record,
          resource = _this$props.resource,
          tabsWithErrors = _this$props.tabsWithErrors;
      var tabIndex = this.state.tabIndex;
      return _react.default.createElement(_core.Card, null, _react.default.createElement(_core.AppBar, {
        position: "static",
        color: "default"
      }, _react.default.createElement(_Tabs.default, {
        value: tabIndex,
        onChange: this.handleChange,
        scrollable: true,
        scrollButtons: "on"
      }, _react.Children.map(children, function (tab) {
        if (!tab) return null;
        return _react.default.cloneElement(tab, {
          context: 'header',
          className: tabsWithErrors.includes(tab.props.label) ? classes.errorTabButton : null
        });
      }))), _react.default.createElement(_Divider.default, null), _react.default.createElement(_reactAdmin.CardContentInner, null, _react.Children.map(children, function (tab, index) {
        return tab && _react.default.cloneElement(tab, {
          context: 'content',
          resource: resource,
          record: record,
          basePath: basePath,
          hidden: tabIndex !== index
        });
      })));
    }
  }]);

  return TabbedInputs;
}(_react.Component);

TabbedInputs.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string),
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string,
  tabsWithErrors: PropTypes.arrayOf(PropTypes.string)
};

var collectErrors = function collectErrors(state, props) {
  var syncErrors = (0, _reduxForm.getFormSyncErrors)(props.form)(state);
  var asyncErrors = (0, _reduxForm.getFormAsyncErrors)(props.form)(state);
  var submitErrors = (0, _reduxForm.getFormSubmitErrors)(props.form)(state);
  return _objectSpread({}, syncErrors, {}, asyncErrors, {}, submitErrors);
};

var findTabsWithErrors = function findTabsWithErrors(state, props) {
  var collectErrorsImpl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : collectErrors;
  var errors = collectErrorsImpl(state, props);
  return _react.Children.toArray(props.children).reduce(function (acc, child) {
    var inputs = _react.Children.toArray(child.props.children);

    if (inputs.some(function (input) {
      return errors[input.props.source];
    })) {
      return [].concat(_toConsumableArray(acc), [child.props.label]);
    }

    return acc;
  }, []);
};

exports.findTabsWithErrors = findTabsWithErrors;
var enhance = (0, _compose.default)((0, _reactRedux.connect)(function (state, props) {
  return {
    tabsWithErrors: findTabsWithErrors(state, _objectSpread({
      form: _reactAdmin.REDUX_FORM_NAME
    }, props))
  };
}), (0, _styles.withStyles)(styles));

var _default = enhance(TabbedInputs);

exports.default = _default;