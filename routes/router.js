import express from 'express';
import { getProducts, createNewProducts } from '../controller/controller.js';

const router = express.Router();

router.get('/',getProducts);
router.post('/', createNewProducts)

export default router;