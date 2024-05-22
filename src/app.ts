import express, { Request, Response } from "express";
import { MobileRouter } from "./modules/mobiles/mobile.route";
const app = express();

// parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mobile Gallery!");
});

app.use("/", MobileRouter);
app.use("/api/products/:productId", MobileRouter);
app.use("/api/products/:productId", MobileRouter);

app.use("/api/orders", MobileRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
