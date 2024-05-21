import { TMobile } from "./mobile.interface";
import { Mobile } from "./mobile.model";

const CreateMobile = async (mobile: TMobile) => {
  const result = await Mobile.create(mobile);
  return result;
};

const getAllMobile = async () => {
  const result = await Mobile.find();
  return result;
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

export const MobileServices = {
  CreateMobile,
  getAllMobile,
  getSingleMobile,
  updateMobileData,
  deleteMobile,
};
