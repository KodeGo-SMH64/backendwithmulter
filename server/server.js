const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Condominium Listings" });
});

const condoRoutes = require("./routes/condoRoutes");
const inquiriesRoute = require("./routes/inquiries");
const userRoute = require("./routes/user");

app.use("/api/condos", condoRoutes);
app.use("/api/inquiries", inquiriesRoute);
app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
