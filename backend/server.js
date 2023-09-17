/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const patientRoutes = require("./routes/patientRoutes");

const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/contacts", contactRoutes);
app.use("/patients", patientRoutes);
// app.use("/join");

const port = process.env.port;
const mongo = process.env.MONGO;

mongoose
  .connect(mongo)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("Server Running"));
