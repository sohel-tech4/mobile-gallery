import express, { Request, Response } from "express";
import { mobileController } from "./mobile.controller";

const router = express.Router();

router.post("/", mobileController.CreateMobile);
router.get("/", mobileController.getAllMobile);
router.get("/api/products/:productId", mobileController.getSingleMobile);
router.put("/api/products/:productId", mobileController.updateMobileData);
router.delete("/api/products/:productId", mobileController.deleteMobile);

router.post("/api/orders", mobileController.CreateOrder);
router.get("/api/orders", mobileController.getAllOrders);

export const MobileRouter = router;
