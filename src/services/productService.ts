import IProduct from '../interfaces/productInterface';
import productModel from '../models/productModel';

const getProducts = (): Promise<IProduct[]> => productModel.getAll();

export default { getProducts };
