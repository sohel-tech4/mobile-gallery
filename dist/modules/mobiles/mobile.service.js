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
exports.MobileServices = void 0;
const order_model_1 = require("../orders/order.model");
const mobile_model_1 = require("./mobile.model");
const CreateMobile = (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mobile_model_1.Mobile.create(mobile);
    return result;
});
const getAllMobile = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (searchTerm) {
            const searchRegex = { $regex: searchTerm, $options: "i" };
            query.$or = [
                { name: searchRegex },
                { category: searchRegex },
                { description: searchRegex },
            ];
        }
        const mobiles = yield mobile_model_1.Mobile.find(query);
        return mobiles;
    }
    catch (error) {
        return error;
    }
});
const getSingleMobile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mobile_model_1.Mobile.findOne({ id });
    return result;
});
const updateMobileData = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mobile_model_1.Mobile.updateOne({ id }, updateData);
    return result;
});
const deleteMobile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mobile_model_1.Mobile.deleteOne({ id });
    return result;
});
const CreateOrder = (NewOrders) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Orders.create(NewOrders);
    return result;
});
const getAllOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (email) {
            query = { email };
        }
        const allOrders = yield order_model_1.Orders.find(query);
        return allOrders;
    }
    catch (error) {
        return error;
    }
});
exports.MobileServices = {
    CreateMobile,
    getAllMobile,
    getSingleMobile,
    updateMobileData,
    deleteMobile,
    CreateOrder,
    getAllOrders,
};
