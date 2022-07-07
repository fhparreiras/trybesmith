import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/productInterface';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProduct[];
};

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return result;
};

export default { createProduct, getAll };
