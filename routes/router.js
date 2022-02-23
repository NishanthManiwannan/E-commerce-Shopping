import express from 'express';
import { getProducts, createNewProducts, updateProduct, deleteProduct } from '../controller/controller.js';

const router = express.Router();

router.get('/',getProducts);
router.post('/', createNewProducts)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;