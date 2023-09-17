/* eslint-disable no-undef */
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");
const validator = require("validator");

const postContact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Some Required Fields Are Empty" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not Valid!" });
  }
  // if (typeof phone !== "number") {
  //   return res.status(400).json({ error: "Phone should be a Number!" });
  // }
  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });
    res.status(201).json({ message: "Contact Sent Successfully", contact });
  } catch (error) {
    res.status(400).json({ error: "Contact Not Sent" });
  }
};

const getContact = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Wrong ID" });
  }
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ error: "Contact Not Found" });
  }
  res.status(200).json(contact);
};

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};

module.exports = { getContact, postContact, getAllContacts };
