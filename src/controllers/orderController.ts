import { Request, Response, Router } from 'express';
import orderService from '../services/orderService';
import productService from '../services/productService';

const orderController = Router();

orderController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.getOrders();
  const products = await productService.getProducts();
  const result = orders.map((order) => (
    { 
      ...order,
      productsIds: products.filter((product) => product.orderId === order.id)
        .map((el) => el.id),
    }
  ));
  return res.status(200).json(result);
});

export default orderController;
