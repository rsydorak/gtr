"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPurchaseTotalPrice = exports.getProductTotalPrice = void 0;

var getProductTotalPrice = function getProductTotalPrice(record, productsData) {
  var totalPrice = Number(((productsData[record.productId] || {}).price * record.quantity).toFixed(2)); // we fetch productsData so we see some fraction of second price as NaN

  return Number.isNaN(totalPrice) ? '' : totalPrice;
};

exports.getProductTotalPrice = getProductTotalPrice;

var getPurchaseTotalPrice = function getPurchaseTotalPrice(purchaseProducts, productsData) {
  if (!Object.keys(productsData).length) {
    return '';
  }

  var totalPrice = Number(purchaseProducts.reduce(function (total, _ref) {
    var productId = _ref.productId,
        quantity = _ref.quantity;
    return total + (productsData[productId] || {}).price * quantity;
  }, 0).toFixed(2));
  return Number.isNaN(totalPrice) ? '' : totalPrice;
};

exports.getPurchaseTotalPrice = getPurchaseTotalPrice;