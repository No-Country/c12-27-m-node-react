import { Router } from 'express';
const router = Router();
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export { router };
