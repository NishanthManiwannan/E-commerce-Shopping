export default (products = [], action) => {
  switch (action.type) {
    case "DELETE":
      return products.filter((products) => products._id !== action.payload);
    case "UPDATE":
      return products.map((products) =>
        products._id === action.payload._id ? action.payload : products
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...products, action.payload];
    default:
      return products;
  }
};
