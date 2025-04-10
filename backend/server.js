import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoute.js";
const port = process.env.PORT || 8000;

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("App is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
