import { Router } from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';

const routers = Router();

routers.use('/products', productController);

routers.use('/users', userController);

export default routers;
