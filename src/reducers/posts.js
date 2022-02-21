export default (products = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...products, action.payload];
    default:
      return products;
  }
};
