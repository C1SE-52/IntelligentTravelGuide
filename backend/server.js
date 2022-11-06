import express from "express";
import data from "./data.js";

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
