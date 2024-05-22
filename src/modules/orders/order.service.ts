import { TOrder } from "./order.interface";
import { Orders } from "./order.model";

const CreateOrder = async (NewOrders: TOrder) => {
  const result = await Orders.create(NewOrders);
  return result;
};

const getAllOrders = async (email?: string) => {
  try {
    let query: any = {};
    if (email) {
      query = { email };
    }
    const allOrders = await Orders.find(query);
    return allOrders;
  } catch (error) {
    return error;
  }
};

export const orderServices = {
  CreateOrder,
  getAllOrders,
};
