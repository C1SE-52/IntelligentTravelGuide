import express from "express";
import Place from "../models/placeModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Place.remove({});
  const createdPlaces = await Place.insertMany(data.places);
  res.send({ createdPlaces });
});
export default seedRouter;
