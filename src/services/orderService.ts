import IOrder from '../interfaces/orderInterface';
import orderModel from '../models/orderModel';

const getOrders = (): Promise<IOrder[]> => orderModel.getOrders();

export default { getOrders };
