import express from "express";
import { mobileController } from "./mobile.controller";

const router = express.Router();

router.post("/", mobileController.CreateMobile);
router.get("/", mobileController.getAllMobile);
router.get("/api/products/:productId", mobileController.getSingleMobile);

export const MobileRouter = router;
