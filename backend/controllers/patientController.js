/* eslint-disable no-undef */

const mongoose = require("mongoose");
const validator = require("validator");
const Patient = require("../models/patientModel");

const addPatient = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Some fields are empty!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not Valid!" });
  }
  //   if (typeof phone !== "number") {
  //     return res.status(400).json({ error: "Phone should be a Number!" });
  //   }

  try {
    const patientExist = await Patient.findOne({ email });
    if (patientExist) {
      return res.status(400).json({ error: "You Are Already a Member!" });
    }
    const patient = await Patient.create({ name, email, phone, message });
    if (!patient) {
      return res.status(400).json({ error: "User was not added!" });
    }
    res.status(201).json({ message: "Welcome, You Just Joined Us!" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { addPatient };
