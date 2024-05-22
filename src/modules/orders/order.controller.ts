import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderZodSchema from "./order.validation.z";
import { MobileServices } from "../mobiles/mobile.service";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodValidationOrder = orderZodSchema.parse(OrderData);
    const OrderedProduct: any = await MobileServices.getSingleMobile(
      OrderData?._id
    );
    const result = await orderServices.CreateOrder(zodValidationOrder);
    const { productId, quantity } = result;
    const previousQuantity = OrderedProduct?.inventory.quantity;
    if (productId != OrderedProduct._id) {
      res.json({
        success: false,
        message: "Order not found",
      });
    } else if (quantity <= previousQuantity) {
      res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
      res.json({
        success: true,
        message: "Insufficient quantity available in inventory",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Order not created successfully!",
      error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result: any = await orderServices.getAllOrders(email as string);
    if (!email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: "Order not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products could not be fetched successfully!",
      error: error,
    });
  }
};

export const orderController = {
  CreateOrder,
  getAllOrders,
};
