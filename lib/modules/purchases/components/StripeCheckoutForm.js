"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeElements = require("react-stripe-elements");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _redux = require("redux");

var _styles = require("@material-ui/core/styles");

var _reactRedux = require("react-redux");

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var styles = function styles(theme) {
  return {
    margin: {
      marginTop: theme.spacing.unit * 1.5
    }
  };
};

var handlePurchase = function handlePurchase(_ref) {
  var stripe = _ref.stripe,
      totalPrice = _ref.totalPrice,
      dispatch = _ref.dispatch,
      createPurchaseTokenName = _ref.createPurchaseTokenName;
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var name, _ref3, token, response;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = createPurchaseTokenName ? createPurchaseTokenName({
                total: totalPrice
              }) : 'Default purchase name';
              _context.next = 3;
              return stripe.createToken({
                name: name
              });

            case 3:
              _ref3 = _context.sent;
              token = _ref3.token;
              _context.next = 7;
              return fetch('/charge', {
                method: 'POST',
                headers: {
                  'Content-Type': 'Text/plain'
                },
                body: JSON.stringify({
                  token: token.id,
                  amount: totalPrice
                })
              });

            case 7:
              response = _context.sent;

              if (response.ok) {
                _context.next = 11;
                break;
              }

              dispatch((0, _reactAdmin.showNotification)('empeek.utils.ra.purchases.paymentFailed', 'warning'));
              return _context.abrupt("return");

            case 11:
              dispatch((0, _reactAdmin.showNotification)('empeek.utils.ra.purchases.paymentSuccess', 'warning'));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  );
};

var StripeCheckoutForm = function StripeCheckoutForm(_ref4) {
  var classes = _ref4.classes,
      dispatch = _ref4.dispatch,
      createPurchaseTokenName = _ref4.createPurchaseTokenName,
      stripe = _ref4.stripe,
      translate = _ref4.translate,
      totalPrice = _ref4.totalPrice;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactStripeElements.CardElement, null), _react.default.createElement(_Button.default, {
    className: classes.margin,
    onClick: handlePurchase({
      stripe: stripe,
      totalPrice: totalPrice,
      dispatch: dispatch,
      createPurchaseTokenName: createPurchaseTokenName
    }),
    color: "primary",
    variant: "contained"
  }, translate('empeek.utils.ra.purchases.payOrder')));
};

StripeCheckoutForm.propTypes = {
  classes: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  dispatch: _propTypes.default.func.isRequired,
  totalPrice: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  translate: _propTypes.default.func.isRequired,
  createPurchaseTokenName: _propTypes.default.func
};

var _default = (0, _redux.compose)(_reactAdmin.translate, (0, _reactRedux.connect)(), (0, _styles.withStyles)(styles), _reactStripeElements.injectStripe)(StripeCheckoutForm);

exports.default = _default;
module.exports = exports.default;