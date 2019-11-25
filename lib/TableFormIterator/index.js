"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core");

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    root: {
      overflow: 'auto',
      '& > li:last-child': {
        borderBottom: 'none'
      }
    },
    tableRow: {
      '& .currency-sign': {
        width: 'auto',
        marginRight: 4,
        '& > p': {
          position: 'relative',
          top: -1
        }
      }
    },
    disableRow: {
      backgroundColor: _red.default[200],
      '& input, div, span': {
        color: 'white'
      },
      '& .currency-sign': {
        '& > p': {
          color: 'white'
        }
      },
      '& a > span': {
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap'
      }
    },
    headerItem: {
      textTransform: 'Capitalize',
      fontSize: '0.9rem'
    },
    action: {
      paddingTop: '0.5em'
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    inputWrapper: {
      minWidth: 90,
      '& input': {
        width: '100%',
        fontSize: '0.9rem'
      },
      '& > div': {
        width: '100%',
        minWidth: 'auto'
      },
      '& > div > div': {
        width: '100%',
        minWidth: 'auto'
      },
      '& > div > div > div': {
        width: '100%',
        minWidth: 'auto'
      },
      tableCell: {
        verticalAlign: 'baseline',
        '& a > span': {
          whiteSpace: 'nowrap'
        },
        '&:first-child > div': {
          minWidth: 120
        }
      },
      '@media (max-width: 1920px)': {
        headerItem: {
          paddingLeft: 6,
          paddingRight: 6
        },
        tableCell: {
          paddingLeft: 6,
          paddingRight: 6
        }
      }
    }
  };
};

var TableFormIterator =
/*#__PURE__*/
function (_Component) {
  _inherits(TableFormIterator, _Component);

  function TableFormIterator(props) {
    var _this;

    _classCallCheck(this, TableFormIterator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableFormIterator).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeField", function (index) {
      return function () {
        var fields = _this.props.fields;

        _this.ids.splice(index, 1);

        fields.remove(index);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "addField", function () {
      var _this$props = _this.props,
          fields = _this$props.fields,
          shouldAllowAdd = _this$props.shouldAllowAdd;
      var isValid = true;

      if (shouldAllowAdd) {
        isValid = shouldAllowAdd();
      }

      if (!isValid) return;

      _this.ids.push(_this.nextId += 1);

      fields.push({});
    });

    _this.nextId = props.fields.length ? props.fields.length : 0;
    _this.ids = _this.nextId > 0 ? Array.from(Array(_this.nextId).keys()) : [];
    return _this;
  }

  _createClass(TableFormIterator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$classes = _this$props2.classes,
          classes = _this$props2$classes === void 0 ? {} : _this$props2$classes,
          children = _this$props2.children,
          fields = _this$props2.fields,
          _this$props2$meta = _this$props2.meta,
          error = _this$props2$meta.error,
          submitFailed = _this$props2$meta.submitFailed,
          disableAdd = _this$props2.disableAdd,
          disableRemove = _this$props2.disableRemove,
          tableRowDisable = _this$props2.tableRowDisable,
          translate = _this$props2.translate;
      if (!fields) return null;
      return _react.default.createElement("div", {
        className: classes.root
      }, submitFailed && error && _react.default.createElement("span", null, translate(error)), _react.default.createElement(_core.Table, null, _react.default.createElement(_core.TableHead, null, _react.default.createElement(_core.TableRow, null, _react.Children.map(children, function (input) {
        return _react.default.createElement(_core.TableCell, {
          key: input.source,
          className: classes.headerItem,
          padding: "checkbox"
        }, input.props.label ? translate(input.props.label) : null);
      }), !disableRemove && _react.default.createElement(_core.TableCell, null))), _react.default.createElement(_core.TableBody, null, fields.map(function (member, fieldIndex) {
        return _react.default.createElement(_core.TableRow, {
          key: member,
          className: (0, _classnames.default)(classes.tableRow, _defineProperty({}, classes.disableRow, tableRowDisable))
        }, _react.Children.map(children, function (input) {
          return _react.default.createElement(_core.TableCell, {
            key: input.props.source,
            className: classes.tableCell,
            padding: "checkbox"
          }, _react.default.createElement("div", {
            className: classes.inputWrapper
          }, (0, _react.cloneElement)(input, {
            source: "".concat(member).concat(input.props.source ? ".".concat(input.props.source) : ''),
            label: '',
            index: fieldIndex
          })));
        }), !disableRemove && _react.default.createElement(_core.TableCell, {
          className: classes.action,
          align: "right",
          padding: "none"
        }, _react.default.createElement(_core.Button, {
          size: "small",
          onClick: _this2.removeField(fieldIndex)
        }, _react.default.createElement(_icons.Close, {
          className: classes.leftIcon
        }))));
      }), !disableAdd && _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TableCell, {
        colSpan: _react.default.Children.count(children) + (disableRemove ? 0 : 1)
      }, _react.default.createElement(_core.Button, {
        size: "small",
        onClick: this.addField
      }, _react.default.createElement(_icons.AddCircleOutline, {
        className: classes.leftIcon
      })))))));
    }
  }]);

  return TableFormIterator;
}(_react.Component);

TableFormIterator.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.objectOf(_propTypes.default.string),
  fields: _propTypes.default.object,
  meta: _propTypes.default.object,
  disableAdd: _propTypes.default.bool,
  disableRemove: _propTypes.default.bool,
  tableRowDisable: _propTypes.default.bool,
  shouldAllowAdd: _propTypes.default.func,
  translate: _propTypes.default.func.isRequired
};

var _default = (0, _redux.compose)((0, _core.withStyles)(styles), _reactAdmin.translate)(TableFormIterator);

exports.default = _default;
module.exports = exports.default;