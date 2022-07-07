import { Request, Response, Router } from 'express';
import productService from '../services/productService';

const productController = Router();

productController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
});

productController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const product = await productService.createProduct(req.body);
  console.log('PRODUCT: ', product);
  return res.status(201).json(product);
});

export default productController;
