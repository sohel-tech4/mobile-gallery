"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const variantsZodSchema = zod_1.default.object({
    type: zod_1.default.string().nonempty("Type is required and cannot be empty"),
    value: zod_1.default.string().nonempty("Value is required and cannot be empty"),
});
const inventoryZodSchema = zod_1.default.object({
    quantity: zod_1.default.number().int().nonnegative("Quantity must be a non-negative integer").describe("The quantity is required"),
    inStock: zod_1.default.boolean().describe("The inStock status is required"),
});
const zodMobileSchema = zod_1.default.object({
    name: zod_1.default.string().nonempty("Name is required and cannot be empty"),
    description: zod_1.default.string().nonempty("Description is required and cannot be empty"),
    price: zod_1.default.number().nonnegative("Price must be a non-negative number").describe("The price is required"),
    category: zod_1.default.string().nonempty("Category is required and cannot be empty"),
    tags: zod_1.default.array(zod_1.default.string().nonempty("Tag cannot be empty")).nonempty("Tags are required and cannot be empty"),
    variants: zod_1.default.array(variantsZodSchema).nonempty("At least one variant is required"),
    inventory: inventoryZodSchema,
});
exports.default = zodMobileSchema;
