"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
const mobileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: ["smartphone", "Apple", "iOS"],
        required: true,
    },
    variants: {
        type: [variantsSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});
exports.Mobile = (0, mongoose_1.model)("Mobile", mobileSchema);
