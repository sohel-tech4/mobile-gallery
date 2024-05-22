"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const orderZodSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    productId: zod_1.default.string(),
    price: zod_1.default.number().nonnegative(),
    quantity: zod_1.default.number().int().positive(),
});
exports.default = orderZodSchema;
