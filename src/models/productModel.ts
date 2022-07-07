import IProduct from '../interfaces/productInterface';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProduct[];
};

export default { getAll };
