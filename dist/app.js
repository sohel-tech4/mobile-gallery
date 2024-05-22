"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mobile_route_1 = require("./modules/mobiles/mobile.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use("/api/products", mobile_route_1.MobileRouter);
app.use("/", mobile_route_1.MobileRouter);
app.use("/api/products/:productId", mobile_route_1.MobileRouter);
app.use("/api/products/:productId", mobile_route_1.MobileRouter);
app.use("/api/orders", mobile_route_1.MobileRouter);
app.get("/", (req, res) => {
    res.send("Hello Mobile!");
});
exports.default = app;
