import IProduct from '../interfaces/productInterface';
import productModel from '../models/productModel';
import HttpException from '../shared/http.exception';

const getProducts = (): Promise<IProduct[]> => productModel.getAll();

const isNameValid = (product: IProduct) => {
  if (!product.name) {
    throw new HttpException(400, '"name" is required'); 
  }
  if (typeof product.name !== 'string') {
    throw new HttpException(422, '"name" must be a string'); 
  }
  if (product.name.length < 2) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
};

const isAmountValid = (product: IProduct) => {
  if (!product.amount) {
    throw new HttpException(400, '"amount" is required'); 
  }
  if (typeof product.amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string'); 
  }
  if (product.amount.length < 2) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  isNameValid(product);
  isAmountValid(product);
  const { insertId } = await productModel.createProduct(product);
  console.log('INSERT ID: ', insertId);
  const newProduct = product;
  newProduct.id = insertId;
  return newProduct;
};

export default { createProduct, getProducts };
