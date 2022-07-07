import { Request, Response, Router } from 'express';
import productService from '../services/productService';

const productController = Router();

productController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getProducts();

  return res.status(200).json(products);
});

export default productController;
