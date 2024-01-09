const express = require("express");
const { becomePartnerDataToDB } = require("../Controllers/becomePartner");

const router = express.Router();

// Define the route for saving data to the database
router.post("/saveBecomePartnerData", becomePartnerDataToDB);

module.exports = router;
