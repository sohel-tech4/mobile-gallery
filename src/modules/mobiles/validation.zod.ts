import z from "zod";

const variantsSchema = z.object({
  type: z.string().min(1, "Type must not be empty"),
  value: z.string().min(1, "Value must not be empty"),
});

const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity must be a non-negative number"),
  location: z.string().min(1, "Location must not be empty"),
});

const zodMobileSchema = z.object({
  name: z.string().min(1, "Name must not be empty"),
  description: z.string().min(1, "Description must not be empty"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category must not be empty"),
  tags: z
    .array(z.string().min(1, "Tag must not be empty"))
    .nonempty("Tags array must have at least one tag"),
  variants: z
    .array(variantsSchema)
    .nonempty("Variants array must have at least one variant"),
  inventory: inventorySchema,
});

export default zodMobileSchema;
