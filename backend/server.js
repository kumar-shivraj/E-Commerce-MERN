import express from "express";
const port = 5000;
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("App is running...");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
