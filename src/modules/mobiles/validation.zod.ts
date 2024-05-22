import { z } from "zod";

const variantsZodSchema = z.object({
  type: z.string().nonempty("Type is required and cannot be empty"),
  value: z.string().nonempty("Value is required and cannot be empty"),
});

const inventoryZodSchema = z.object({
  quantity: z.number().int().nonnegative("Quantity must be a non-negative integer").describe("The quantity is required"),
  inStock: z.boolean().describe("The inStock status is required"),
});

const zodMobileSchema = z.object({
  name: z.string().nonempty("Name is required and cannot be empty"),
  description: z.string().nonempty("Description is required and cannot be empty"),
  price: z.number().nonnegative("Price must be a non-negative number").describe("The price is required"),
  category: z.string().nonempty("Category is required and cannot be empty"),
  tags: z.array(z.string().nonempty("Tag cannot be empty")).nonempty("Tags are required and cannot be empty"),
  variants: z.array(variantsZodSchema).nonempty("At least one variant is required"),
  inventory: inventoryZodSchema,
});

export default zodMobileSchema;
