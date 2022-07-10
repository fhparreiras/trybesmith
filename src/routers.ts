import { Router } from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const routers = Router();

routers.use('/orders', orderController);

routers.use('/products', productController);

routers.use('/users', userController);

export default routers;
