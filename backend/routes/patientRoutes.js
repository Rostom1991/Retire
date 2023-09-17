/* eslint-disable no-undef */

const { addPatient } = require("../controllers/patientController");

const router = require("express").Router();

//ADD PATIENT
router.post("/", addPatient);

module.exports = router;
