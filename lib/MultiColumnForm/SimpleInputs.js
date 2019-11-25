"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _reactAdmin = require("react-admin");

var _core = require("@material-ui/core");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var componentsNotCapableOfFullWidth = [_reactAdmin.BooleanInput, _reactAdmin.ReferenceField, _reactAdmin.TextField];

var styles = function styles(theme) {
  return {
    checkbox: {
      marginTop: theme.spacing.unit * 3.5
    },
    input: {
      minWidth: 0,
      width: '100%'
    }
  };
};

var SimpleInputs = function SimpleInputs(_ref) {
  var classes = _ref.classes,
      basePath = _ref.basePath,
      children = _ref.children,
      record = _ref.record,
      resource = _ref.resource;
  return _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 24
  }, _react.Children.map(children, function (input) {
    return _react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3
    }, _react.default.createElement(_reactAdmin.FormInput, {
      basePath: basePath,
      input: _react.default.cloneElement(input, _objectSpread({
        className: (0, _classnames.default)(_defineProperty({}, classes.checkbox, input.type === _reactAdmin.BooleanInput), classes.input)
      }, componentsNotCapableOfFullWidth.includes(input.type) ? {} : {
        fullWidth: true
      }, {}, input.type === _reactAdmin.FormDataConsumer ? {
        addLabel: true
      } : {})),
      record: record,
      resource: resource
    }));
  }));
};

SimpleInputs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  basePath: PropTypes.string,
  children: PropTypes.node,
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string
};

var _default = (0, _core.withStyles)(styles)(SimpleInputs);

exports.default = _default;
module.exports = exports.default;