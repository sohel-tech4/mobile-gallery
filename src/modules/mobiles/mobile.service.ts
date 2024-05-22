import { TOrder } from "../orders/order.interface";
import { Orders } from "../orders/order.model";
import { TMobile } from "./mobile.interface";
import { Mobile } from "./mobile.model";

const CreateMobile = async (mobile: TMobile) => {
  const result = await Mobile.create(mobile);
  return result;
};

const getAllMobile = async (searchTerm?: string) => {
  try {
    let query: any = {};
    if (searchTerm) {
      const searchRegex = { $regex: searchTerm, $options: "i" };
      query.$or = [
        { name: searchRegex },
        { category: searchRegex },
        { description: searchRegex },
      ];
    }
    const mobiles = await Mobile.find(query);
    return mobiles;
  } catch (error) {
    return error;
  }
};

const getSingleMobile = async (id: string) => {
  const result = await Mobile.findOne({ id });
  return result;
};

const updateMobileData = async (id: string, updateData: any) => {
  const result = await Mobile.updateOne({ id }, updateData);
  return result;
};

const deleteMobile = async (id: string) => {
  const result = await Mobile.deleteOne({ id });
  return result;
};

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

export const MobileServices = {
  CreateMobile,
  getAllMobile,
  getSingleMobile,
  updateMobileData,
  deleteMobile,
  CreateOrder,
  getAllOrders,
};
