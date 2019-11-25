"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edit = exports.Create = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _reduxForm = require("redux-form");

var _reactRouterDom = require("react-router-dom");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _redux = require("redux");

var _styles = require("@material-ui/core/styles");

var _reactRedux = require("react-redux");

var _MultiColumnForm = require("../../MultiColumnForm");

var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));

var _ReferenceAutocompleteInput = _interopRequireDefault(require("./ReferenceAutocompleteInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var sanitizer = function sanitizer(_ref) {
  var anyTouched = _ref.anyTouched,
      asyncValidate = _ref.asyncValidate,
      asyncValidating = _ref.asyncValidating,
      clearSubmit = _ref.clearSubmit,
      dirty = _ref.dirty,
      handleSubmit = _ref.handleSubmit,
      initialized = _ref.initialized,
      initialValues = _ref.initialValues,
      invalid = _ref.invalid,
      pristine = _ref.pristine,
      resetSection = _ref.resetSection,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      valid = _ref.valid,
      pure = _ref.pure,
      triggerSubmit = _ref.triggerSubmit,
      clearFields = _ref.clearFields,
      clearAsyncError = _ref.clearAsyncError,
      clearSubmitErrors = _ref.clearSubmitErrors,
      asyncBlurFields = _ref.asyncBlurFields,
      autofill = _ref.autofill,
      blur = _ref.blur,
      change = _ref.change,
      destroy = _ref.destroy,
      initialize = _ref.initialize,
      reset = _ref.reset,
      submit = _ref.submit,
      touch = _ref.touch,
      untouch = _ref.untouch,
      formInputs = _ref.formInputs,
      showFileds = _ref.showFileds,
      autocompleteOptionText = _ref.autocompleteOptionText,
      props = _objectWithoutProperties(_ref, ["anyTouched", "asyncValidate", "asyncValidating", "clearSubmit", "dirty", "handleSubmit", "initialized", "initialValues", "invalid", "pristine", "resetSection", "submitting", "submitFailed", "submitSucceeded", "valid", "pure", "triggerSubmit", "clearFields", "clearAsyncError", "clearSubmitErrors", "asyncBlurFields", "autofill", "blur", "change", "destroy", "initialize", "reset", "submit", "touch", "untouch", "formInputs", "showFileds", "autocompleteOptionText"]);

  return props;
};

var RolesForm = function RolesForm(_ref2) {
  var isEdit = _ref2.isEdit,
      dataProvider = _ref2.dataProvider,
      dispatch = _ref2.dispatch,
      classes = _ref2.classes,
      disabled = _ref2.disabled,
      match = _ref2.match,
      staticContext = _ref2.staticContext,
      asyncValidate = _ref2.asyncValidate,
      save = _ref2.save,
      redirect = _ref2.redirect,
      autocompleteOptionText = _ref2.autocompleteOptionText,
      formInputs = _ref2.formInputs,
      showFileds = _ref2.showFileds,
      translate = _ref2.translate,
      props = _objectWithoutProperties(_ref2, ["isEdit", "dataProvider", "dispatch", "classes", "disabled", "match", "staticContext", "asyncValidate", "save", "redirect", "autocompleteOptionText", "formInputs", "showFileds", "translate"]);

  var _ref3 = (match || {}).params || {},
      id = _ref3.id;

  var version = props.version;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      handleChangeValue = _useState2[1];

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_AppBar.default, {
    position: "static"
  }, _react.default.createElement(_Tabs.default, {
    value: value,
    onChange: function onChange(e, val) {
      return handleChangeValue(val);
    }
  }, _react.default.createElement(_Tab.default, {
    label: translate('empeek.utils.ra.roles.role')
  }), _react.default.createElement(_Tab.default, {
    label: translate('empeek.utils.ra.roles.users'),
    disabled: disabled
  }))), value === 0 && _react.default.createElement(_MultiColumnForm.Form, _extends({}, props, {
    save: save,
    redirect: redirect
  }), _react.default.createElement(_MultiColumnForm.Content, {
    position: "main"
  }, _react.default.createElement(_reactAdmin.DisabledInput, {
    source: "id"
  }), formInputs.map(function (input) {
    return _react.default.createElement(_reactAdmin.TextInput, {
      key: input,
      source: input
    });
  })), _react.default.createElement(_MultiColumnForm.Content, {
    position: "side"
  }, _react.default.createElement(_reactAdmin.ReferenceArrayInput, {
    source: "permissions",
    reference: "permissions"
  }, _react.default.createElement(_reactAdmin.CheckboxGroupInput, {
    source: "permissions"
  })))), value === 1 &&
  /** We need this version prop here in order to force update of component
   and show up to date users when we delete them from particular role.
   Otherwise users wont gone from UI after delete.
  */
  _react.default.createElement(_reactAdmin.Show, _extends({}, sanitizer(props), {
    id: id,
    key: version,
    actions: _react.default.createElement(_ReferenceAutocompleteInput.default, {
      dispatch: dispatch,
      dataProvider: dataProvider,
      roleId: id,
      autocompleteOptionText: autocompleteOptionText
    })
  }), _react.default.createElement(_reactAdmin.ReferenceManyField, _extends({
    reference: "users",
    target: "roleId"
  }, props), _react.default.createElement(_reactAdmin.Datagrid, null, showFileds.map(function (field) {
    return _react.default.createElement(_reactAdmin.TextField, {
      key: field,
      source: field
    });
  }), _react.default.createElement(_DeleteButton.default, {
    dispatch: dispatch,
    dataProvider: dataProvider
  })))));
};

RolesForm.defaultProps = {
  formInputs: ['name'],
  showFileds: ['firstName', 'lastName']
};
RolesForm.propTypes = {
  isEdit: _propTypes.default.bool,
  dataProvider: _propTypes.default.func,
  dispatch: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  save: _propTypes.default.func.isRequired,
  classes: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  match: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.object])),
  autocompleteOptionText: _propTypes.default.func,
  formInputs: _propTypes.default.arrayOf(_propTypes.default.string),
  showFileds: _propTypes.default.arrayOf(_propTypes.default.string),
  translate: _propTypes.default.func.isRequired
};

var Create = function Create(_ref4) {
  var autocompleteOptionText = _ref4.autocompleteOptionText,
      formInputs = _ref4.formInputs,
      showFileds = _ref4.showFileds,
      rest = _objectWithoutProperties(_ref4, ["autocompleteOptionText", "formInputs", "showFileds"]);

  return _react.default.createElement(_reactAdmin.Create, rest, _react.default.createElement(RolesForm, {
    disabled: true,
    redirect: "list",
    autocompleteOptionText: autocompleteOptionText,
    formInputs: formInputs,
    showFileds: showFileds
  }));
};

exports.Create = Create;
RolesForm = (0, _redux.compose)(_reactAdmin.translate, _reactAdmin.withDataProvider, (0, _styles.withStyles)(styles), _reactRouterDom.withRouter, (0, _reduxForm.reduxForm)({
  form: 'userList'
}), (0, _reactRedux.connect)())(RolesForm);

var Edit = function Edit(_ref5) {
  var autocompleteOptionText = _ref5.autocompleteOptionText,
      formInputs = _ref5.formInputs,
      showFileds = _ref5.showFileds,
      rest = _objectWithoutProperties(_ref5, ["autocompleteOptionText", "formInputs", "showFileds"]);

  return _react.default.createElement(_reactAdmin.Edit, rest, _react.default.createElement(RolesForm, {
    isEdit: true,
    autocompleteOptionText: autocompleteOptionText,
    formInputs: formInputs,
    showFileds: showFileds
  }));
};

exports.Edit = Edit;