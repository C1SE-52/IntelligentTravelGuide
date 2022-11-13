import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

//test
app.get("/api/places", (req, res) => {
  res.send(data.places);
});
app.get("/api/places/slug/:slug", (req, res) => {
  const place = data.places.find((x) => x.slug === req.params.slug);
  if (place) {
    res.send(place);
  } else {
    res.status(404).send({ message: "Place Not Found" });
  }
  res.send(data.places);
});

app.get("/api/places/:id", (req, res) => {
  const product = data.places.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
