// houseRoutes.js

const express = require("express");
const router = express.Router();
const condoController = require("../controllers/condoControllers");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// GET /api/condos - Get all condos
router.get("/getallproperty", condoController.getCondos);

// POST /api/condos - Create a new condo
router.post(
  "/addproperty",
  upload.array("images", 6),
  condoController.createCondo
);

module.exports = router;
