import * as api from '../api'

export const getProducts = () => async (dispatch) => {

    try{
        const {data} = await api.getProducts();
        dispatch({type : "FETCH_ALL", payload: data});

    }catch(err){
        console.log(err)
    }
}

export const addProduct = (productData) => async(dispatch) => {
    try{
        const {data} = await api.addProduct(productData)
        dispatch({type : "CREATE", payload: data})
        console.log(data);
    }catch(err){
        console.log(err);
    }
}