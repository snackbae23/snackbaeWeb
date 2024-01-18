const express = require("express");
const { becomePartnerDataToDB } = require("../Controllers/becomePartner");
const { getPartnerData } = require("../Controllers/getPartnerData");
const router = express.Router();

// Define the route for saving data to the database
router.post("/saveBecomePartnerData", becomePartnerDataToDB);
router.get("/getPartnerData", getPartnerData);

module.exports = router;