import { Router } from 'express';
import productController from './controllers/productController';

const routers = Router();

routers.use('/products', productController);

export default routers;
