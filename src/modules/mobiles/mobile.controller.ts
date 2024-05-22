import { Request, Response } from "express";
import { MobileServices } from "./mobile.service";
import zodMobileSchema from "./mobile.validation.z";
import orderZodSchema from "../orders/order.validation.z";

const CreateMobile = async (req: Request, res: Response) => {
  try {
    const mobileData = req.body;
    const mobileZodValidation = zodMobileSchema.parse(mobileData);
    const result = await MobileServices.CreateMobile(mobileZodValidation);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Product not created successfully!",
      error,
    });
  }
};

const getAllMobile = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result: any = await MobileServices.getAllMobile(searchTerm as string);
    if (!searchTerm) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: `No products found matching search term '${searchTerm}'`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
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

const getSingleMobile = async (req: Request, res: Response) => {
  try {
    const { singleMobile } = req.params;
    const result = await MobileServices.getSingleMobile(singleMobile);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product Could not fetched successfully!",
      error,
    });
  }
};

const updateMobileData = async (req: Request, res: Response) => {
  try {
    const { singleMobile } = req.params;
    const updateData = req.body;
    const result = await MobileServices.updateMobileData(
      singleMobile,
      updateData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product Could not updated successfully!",
      error,
    });
  }
};

const deleteMobile = async (req: Request, res: Response) => {
  try {
    const { singleMobile } = req.params;
    const result = await MobileServices.deleteMobile(singleMobile);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product Could not deleted successfully!",
      error,
    });
  }
};

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodValidationOrder = orderZodSchema.parse(OrderData);
    const OrderedProduct: any = await MobileServices.getSingleMobile(
      OrderData?._id
    );
    const result = await MobileServices.CreateOrder(zodValidationOrder);
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
    const result: any = await MobileServices.getAllOrders(email as string);
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

export const mobileController = {
  CreateMobile,
  getAllMobile,
  getSingleMobile,
  updateMobileData,
  deleteMobile,
  CreateOrder,
  getAllOrders,
};
