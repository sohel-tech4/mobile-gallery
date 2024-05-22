import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();

router.post("/api/orders", orderController.CreateOrder);
router.get("/api/orders", orderController.getAllOrders);

export const MobileRouter = router;
