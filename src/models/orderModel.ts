import IOrder from '../interfaces/orderInterface';
import connection from './connection';

const getOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Orders',
  );
  return rows as IOrder[];
};

export default { getOrders };
