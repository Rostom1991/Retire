/* eslint-disable no-undef */
const {
  getAllContacts,
  getContact,
  postContact,
} = require("../controllers/contactController");

/* eslint-disable no-undef */
const router = require("express").Router();

//GetAllContacts
router.get("/", getAllContacts);
//GetOneContact
router.get("/:id", getContact);
//Add Contact
router.post("/", postContact);

module.exports = router;
