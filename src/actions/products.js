import * as api from "../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(productData);
    dispatch({ type: "CREATE", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({type: "DELETE", payload: id})

    } catch (error) {
        console.log(error)
    }
}
