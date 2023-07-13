import { Router } from 'express';
import { getAllOrders } from '../controllers/order.controller';
const router = Router();

router.get('/', getAllOrders);

// TODO: Other routes

export { router };
