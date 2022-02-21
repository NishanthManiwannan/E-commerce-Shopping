import axios from 'axios';

const url = "http://localhost:5000/products";

export const addProduct = (newProduct) => axios.post(url, newProduct);