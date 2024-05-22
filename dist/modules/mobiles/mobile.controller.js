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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileController = void 0;
const mobile_service_1 = require("./mobile.service");
const CreateMobile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mobileData = req.body;
    const result = yield mobile_service_1.MobileServices.CreateMobile(mobileData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
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
    const OrderData = req.body;
    const result = yield mobile_service_1.MobileServices.CreateOrder(OrderData);
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
    });
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
