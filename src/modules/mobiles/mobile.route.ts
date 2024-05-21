import express, { Request, Response } from "express";
import { Mobile } from "./mobile.models";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = await Mobile.create(req.body);
  res.json({
    success: true,
    message: "Product Created Successfully",
    data: result,
  });
});

export const MobileRouter = router;
