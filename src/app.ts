import express, { Request, Response } from "express";
import { MobileRouter } from "./modules/mobiles/mobile.route";
const app = express();

// parser
app.use(express.json());

app.use("/api/products", MobileRouter);
app.use("/", MobileRouter);
app.use("/api/products/:productId", MobileRouter);
app.use("/api/products/:productId", MobileRouter);

app.use("/api/orders", MobileRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Router Not Found",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mobile!");
});

export default app;
