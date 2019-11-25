"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurchaseButton = function PurchaseButton(_ref) {
  var disabled = _ref.disabled,
      translate = _ref.translate,
      toggleModal = _ref.toggleModal;
  return _react.default.createElement(_Button.default, {
    disabled: disabled,
    variant: "contained",
    onClick: function onClick() {
      return toggleModal(true);
    }
  }, translate('empeek.utils.ra.purchases.payOrder'));
};

PurchaseButton.propTypes = {
  disabled: _propTypes.default.bool.isRequired,
  toggleModal: _propTypes.default.func.isRequired,
  translate: _propTypes.default.func.isRequired
};

var _default = (0, _reactAdmin.translate)(PurchaseButton);

exports.default = _default;
module.exports = exports.default;