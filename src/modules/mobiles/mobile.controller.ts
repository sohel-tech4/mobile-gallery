import { Request, Response } from "express";
import { MobileServices } from "./mobile.service";

const CreateMobile = async (req: Request, res: Response) => {
  const mobileData = req.body;
  const result = await MobileServices.CreateMobile(mobileData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
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

export const mobileController = {
  CreateMobile,
  getAllMobile,
  getSingleMobile,
  updateMobileData,
  deleteMobile,
};
