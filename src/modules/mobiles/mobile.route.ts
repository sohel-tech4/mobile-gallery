import express, { Request, Response } from "express";
import { Mobile } from "./mobile.models";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const Result = Mobile.create(req.body);
  res.json({
    success: true,
    message: "Product Created Successfully",
    data: Result,
  });
});

export const MobileRouter = router;
