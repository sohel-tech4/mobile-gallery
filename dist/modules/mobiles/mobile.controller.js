"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileController = void 0;
const mobile_service_1 = require("./mobile.service");
const mobile_validation_z_1 = __importDefault(require("./mobile.validation.z"));
const order_validation_z_1 = __importDefault(require("../orders/order.validation.z"));
const CreateMobile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mobileData = req.body;
        const mobileZodValidation = mobile_validation_z_1.default.parse(mobileData);
        const result = yield mobile_service_1.MobileServices.CreateMobile(mobileZodValidation);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "Product not created successfully!",
            error,
        });
    }
});
const getAllMobile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield mobile_service_1.MobileServices.getAllMobile(searchTerm);
        if (!searchTerm) {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else if (result.length === 0) {
            res.status(404).json({
                success: false,
                message: `No products found matching search term '${searchTerm}'`,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products could not be fetched successfully!",
            error: error,
        });
    }
});
const getSingleMobile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { singleMobile } = req.params;
        const result = yield mobile_service_1.MobileServices.getSingleMobile(singleMobile);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product Could not fetched successfully!",
            error,
        });
    }
});
const updateMobileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { singleMobile } = req.params;
        const updateData = req.body;
        const result = yield mobile_service_1.MobileServices.updateMobileData(singleMobile, updateData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updateData,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product Could not updated successfully!",
            error,
        });
    }
});
const deleteMobile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { singleMobile } = req.params;
        const result = yield mobile_service_1.MobileServices.deleteMobile(singleMobile);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product Could not deleted successfully!",
            error,
        });
    }
});
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderData = req.body;
        const zodValidationOrder = order_validation_z_1.default.parse(OrderData);
        const result = yield mobile_service_1.MobileServices.CreateOrder(zodValidationOrder);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "Order not created successfully!",
            error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield mobile_service_1.MobileServices.getAllOrders(email);
        if (!email) {
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
        else if (result.length === 0) {
            res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products could not be fetched successfully!",
            error: error,
        });
    }
});
exports.mobileController = {
    CreateMobile,
    getAllMobile,
    getSingleMobile,
    updateMobileData,
    deleteMobile,
    CreateOrder,
    getAllOrders,
};
