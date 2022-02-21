import * as api from '../api'

export const addProduct = (productData) => async(dispatch) => {
    try{
        const {data} = await api.addProduct(productData)
        dispatch({type : "CREATE", payload: data})
        console.log(data);
    }catch(err){
        console.log(err);
    }
}