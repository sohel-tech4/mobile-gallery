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

export const MobileServices = {
  CreateMobile,
  getAllMobile,
};
