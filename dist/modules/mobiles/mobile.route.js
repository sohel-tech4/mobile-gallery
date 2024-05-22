"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileRouter = void 0;
const express_1 = __importDefault(require("express"));
const mobile_controller_1 = require("./mobile.controller");
const router = express_1.default.Router();
router.post("/api/products", mobile_controller_1.mobileController.CreateMobile);
router.get("/api/products", mobile_controller_1.mobileController.getAllMobile);
router.get("/api/products/:productId", mobile_controller_1.mobileController.getSingleMobile);
router.put("/api/products/:productId", mobile_controller_1.mobileController.updateMobileData);
router.delete("/api/products/:productId", mobile_controller_1.mobileController.deleteMobile);
router.post("/api/orders", mobile_controller_1.mobileController.CreateOrder);
router.get("/api/orders", mobile_controller_1.mobileController.getAllOrders);
exports.MobileRouter = router;
