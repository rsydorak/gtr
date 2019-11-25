"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _reactAdmin = require("react-admin");

var _redux = require("redux");

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _reactStripeElements = require("react-stripe-elements");

var _styles = require("@material-ui/core/styles");

var _StripeCheckoutForm = _interopRequireDefault(require("./StripeCheckoutForm"));

var _calculationMethods = require("../calculationMethods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  alignRight: {
    textAlign: 'right'
  }
};

var PaymentDialog = function PaymentDialog(_ref) {
  var open = _ref.open,
      createPurchaseTokenName = _ref.createPurchaseTokenName,
      toggleModal = _ref.toggleModal,
      translate = _ref.translate,
      classes = _ref.classes,
      productsData = _ref.productsData,
      purchaseProducts = _ref.purchaseProducts;
  var totalPrice = (0, _calculationMethods.getPurchaseTotalPrice)(purchaseProducts, productsData);
  return _react.default.createElement(_reactStripeElements.StripeProvider, {
    apiKey: process.env.REACT_APP_STRIPE_API_KEY
  }, _react.default.createElement(_Dialog.default, {
    open: open,
    disableBackdropClick: true,
    fullWidth: true,
    keepMounted: true
  }, _react.default.createElement(_DialogTitle.default, null, translate('empeek.utils.ra.purchases.stripePaymentForm')), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, {
    className: classes.alignRight
  }, "".concat(translate('empeek.utils.ra.purchases.totalPurchasePrice'), ": $").concat(totalPrice)), _react.default.createElement(_reactStripeElements.Elements, null, _react.default.createElement(_StripeCheckoutForm.default, {
    totalPrice: totalPrice,
    createPurchaseTokenName: createPurchaseTokenName
  }))), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return toggleModal(false);
    },
    color: "primary"
  }, translate('ra.action.cancel')))));
};

PaymentDialog.propTypes = {
  open: _propTypes.default.bool.isRequired,
  toggleModal: _propTypes.default.func.isRequired,
  classes: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  purchaseProducts: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  productsData: _propTypes.default.objectOf(_propTypes.default.object).isRequired,
  translate: _propTypes.default.func.isRequired,
  createPurchaseTokenName: _propTypes.default.func
};

var _default = (0, _redux.compose)(_reactAdmin.translate, (0, _styles.withStyles)(styles))(PaymentDialog);

exports.default = _default;
module.exports = exports.default;