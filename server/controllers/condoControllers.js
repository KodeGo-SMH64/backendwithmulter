// condoController.js

const Condo = require("../models/Condo");

// Get all condos
exports.getCondos = async (req, res) => {
  try {
    const condos = await Condo.find();
    res.json(condos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Get individual Condominiums

// Create a new condo
exports.createCondo = async (req, res) => {
  try {
    const {
      availability,
      propertytype,
      sellingprice,
      description,
      bedrooms,
      bathrooms,
      carparks,
      floorarea,
      homefeatures,
      neighborhoodfeatures,
      foodhubs,
      grocery,
      gym,
      school,
      store,
      hospital,
      neighborhoodvicinity,
    } = req.body;

    const newCondo = new Condo({
      availability,
      propertytype,
      sellingprice,
      description,
      bedrooms,
      bathrooms,
      carparks,
      floorarea,
      homefeatures,
      neighborhoodfeatures,
      foodhubs,
      grocery,
      gym,
      school,
      store,
      hospital,
      neighborhoodvicinity,
      images: req.files.map((file) => file.filename),
    });

    const savedCondo = await newCondo.save();

    res.status(201).json(savedCondo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
