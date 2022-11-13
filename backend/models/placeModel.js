import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    quantity: { type: String, required: true },
    image: { type: String, required: true },
    imageCaption: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    mapUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model("Place", placeSchema);
export default Place;
