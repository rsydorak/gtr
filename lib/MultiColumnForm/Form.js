"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SimpleForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactAdmin = require("react-admin");

var _core = require("@material-ui/core");

var _Content = require("./Content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var styles = function styles(theme) {
  return {
    formContent: {
      padding: theme.spacing.unit * 2.5
    }
  };
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var anyTouched = _ref.anyTouched,
      array = _ref.array,
      asyncBlurFields = _ref.asyncBlurFields,
      asyncValidate = _ref.asyncValidate,
      asyncValidating = _ref.asyncValidating,
      autofill = _ref.autofill,
      blur = _ref.blur,
      change = _ref.change,
      clearAsyncError = _ref.clearAsyncError,
      clearFields = _ref.clearFields,
      clearSubmit = _ref.clearSubmit,
      clearSubmitErrors = _ref.clearSubmitErrors,
      destroy = _ref.destroy,
      dirty = _ref.dirty,
      dispatch = _ref.dispatch,
      form = _ref.form,
      handleSubmit = _ref.handleSubmit,
      initialize = _ref.initialize,
      initialized = _ref.initialized,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      pure = _ref.pure,
      redirect = _ref.redirect,
      reset = _ref.reset,
      resetSection = _ref.resetSection,
      save = _ref.save,
      submit = _ref.submit,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitting = _ref.submitting,
      touch = _ref.touch,
      translate = _ref.translate,
      triggerSubmit = _ref.triggerSubmit,
      untouch = _ref.untouch,
      valid = _ref.valid,
      validate = _ref.validate,
      props = _objectWithoutProperties(_ref, ["anyTouched", "array", "asyncBlurFields", "asyncValidate", "asyncValidating", "autofill", "blur", "change", "clearAsyncError", "clearFields", "clearSubmit", "clearSubmitErrors", "destroy", "dirty", "dispatch", "form", "handleSubmit", "initialize", "initialized", "initialValues", "pristine", "pure", "redirect", "reset", "resetSection", "save", "submit", "submitFailed", "submitSucceeded", "submitting", "touch", "translate", "triggerSubmit", "untouch", "valid", "validate"]);

  return props;
};

var SimpleForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleForm, _Component);

  function SimpleForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SimpleForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SimpleForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSubmitWithRedirect", function () {
      var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.redirect;
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          save = _this$props.save;
      return handleSubmit(function (values) {
        return save(values, redirect);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasContentPosition", function (currentPosition) {
      var children = _this.props.children;
      var has = false;

      _react.Children.forEach(children, function (x) {
        if (((x || {}).props || {}).position === currentPosition) {
          has = true;
        }
      });

      return has;
    });

    _defineProperty(_assertThisInitialized(_this), "getGridSize", function (content) {
      var position = content.props.position;

      switch (position) {
        case _Content.positions.MAIN:
          return _this.hasContentPosition(_Content.positions.SIDE) ? 6 : 12;

        case _Content.positions.SIDE:
          return _this.hasContentPosition(_Content.positions.MAIN) ? 6 : 12;

        default:
          return 12;
      }
    });

    return _this;
  }

  _createClass(SimpleForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          basePath = _this$props2.basePath,
          children = _this$props2.children,
          invalid = _this$props2.invalid,
          pristine = _this$props2.pristine,
          record = _this$props2.record,
          redirect = _this$props2.redirect,
          resource = _this$props2.resource,
          saving = _this$props2.saving,
          submitOnEnter = _this$props2.submitOnEnter,
          toolbar = _this$props2.toolbar,
          version = _this$props2.version,
          classes = _this$props2.classes,
          rest = _objectWithoutProperties(_this$props2, ["basePath", "children", "invalid", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "toolbar", "version", "classes"]);

      var handleSubmit = this.props.handleSubmit;
      return _react.default.createElement("form", _extends({
        key: version
      }, sanitizeRestProps(rest)), _react.default.createElement(_core.Grid, {
        container: true,
        spacing: 24,
        className: classes.formContent
      }, _react.Children.map(children, function (content) {
        return content && _react.default.createElement(_core.Grid, {
          item: true,
          xs: _this2.getGridSize(content)
        }, _react.default.cloneElement(content, {
          resource: resource,
          record: record,
          basePath: basePath
        }));
      })), toolbar && _react.default.cloneElement(toolbar, {
        basePath: basePath,
        handleSubmitWithRedirect: this.handleSubmitWithRedirect,
        handleSubmit: handleSubmit,
        invalid: invalid,
        pristine: pristine,
        record: record,
        redirect: redirect,
        resource: resource,
        saving: saving,
        submitOnEnter: submitOnEnter
      }));
    }
  }]);

  return SimpleForm;
}(_react.Component);

exports.SimpleForm = SimpleForm;
SimpleForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  basePath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  handleSubmit: PropTypes.func,
  // passed by redux-form
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  record: PropTypes.object,
  resource: PropTypes.string,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
  save: PropTypes.func,
  // the handler defined in the parent, which triggers the REST submission
  saving: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  submitOnEnter: PropTypes.bool,
  toolbar: PropTypes.element,
  validate: PropTypes.func,
  version: PropTypes.number
};
SimpleForm.defaultProps = {
  submitOnEnter: true,
  toolbar: _react.default.createElement(_reactAdmin.Toolbar, null)
};
var enhance = (0, _compose.default)((0, _reactRedux.connect)(function (state, props) {
  return {
    form: props.form || _reactAdmin.REDUX_FORM_NAME,
    initialValues: (0, _reactAdmin.getDefaultValues)(state, props),
    saving: props.saving || state.admin.saving
  };
}), _reactAdmin.translate, (0, _reduxForm.reduxForm)({
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
}), (0, _core.withStyles)(styles));

var _default = enhance(SimpleForm);

exports.default = _default;