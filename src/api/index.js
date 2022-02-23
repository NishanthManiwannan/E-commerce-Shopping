import axios from 'axios';

const url = "http://localhost:5000/products";

export const getProducts = () =>  axios.get(url);

export const addProduct = (newProduct) => axios.post(url, newProduct);

export const updateProduct = (id, updateProduct) => axios.patch(`${url}/${id}`, updateProduct); 

export const deleteProduct = (id) => axios.delete(`${url}/${id}`)