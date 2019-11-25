export const getProductTotalPrice = (record, productsData) => {
  const totalPrice = Number(((productsData[record.productId] || {}).price * record.quantity).toFixed(2));
  // we fetch productsData so we see some fraction of second price as NaN
  return Number.isNaN(totalPrice) ? '' : totalPrice;
};

export const getPurchaseTotalPrice = (purchaseProducts, productsData) => {
  if (!Object.keys(productsData).length) {
    return '';
  }
  const totalPrice = Number(
    purchaseProducts
      .reduce((total, { productId, quantity }) => total + (productsData[productId] || {}).price * quantity, 0)
      .toFixed(2),
  );
  return Number.isNaN(totalPrice) ? '' : totalPrice;
};
