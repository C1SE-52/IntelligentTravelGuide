import express from "express";
import Place from "../models/placeModel.js";

const placeRouter = express.Router();

placeRouter.get("/", async (req, res) => {
  const places = await Place.find();
  res.send(places);
});

placeRouter.get("/slug/:slug", async (req, res) => {
  const place = await Place.findOne({ slug: req.params.slug });
  if (place) {
    res.send(place);
  } else {
    res.status(404).send({ message: "Place Not Found" });
  }
});
placeRouter.get("/:id", async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (place) {
    res.send(place);
  } else {
    res.status(404).send({ message: "Place Not Found" });
  }
});

export default placeRouter;
