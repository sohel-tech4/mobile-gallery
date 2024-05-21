import express, { Request, Response } from "express";
import { MobileRouter } from "./modules/mobiles/mobile.route";
const app = express();

// parser
app.use(express.json());

app.use("/api/products", MobileRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mobile!");
});

export default app;
