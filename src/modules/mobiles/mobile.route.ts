import express from "express";
import { mobileController } from "./mobile.controller";

const router = express.Router();

router.post("/", mobileController.CreateMobile);
router.get("/", mobileController.getAllMobile);

export const MobileRouter = router;
