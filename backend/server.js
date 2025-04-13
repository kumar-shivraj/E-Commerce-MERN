import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import { notFount, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 8000;

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("App is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFount);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
