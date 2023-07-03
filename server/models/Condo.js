const mongoose = require("mongoose");

const condoSchema = new mongoose.Schema({
  availability: {
    type: Boolean,
    required: true,
  },
  propertytype: {
    type: String,
    required: true,
  },
  sellingprice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  carparks: {
    type: Number,
    required: true,
  },
  floorarea: {
    type: Number,
    required: true,
  },
  homefeatures: {
    type: String,
    required: true,
  },
  neighborhoodfeatures: {
    type: String,
    required: true,
  },
  foodhubs: {
    type: String,
    required: true,
  },
  grocery: {
    type: String,
    required: true,
  },
  gym: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  neighborhoodvicinity: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Condo", condoSchema);
