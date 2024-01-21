const express = require("express");
const { becomePartnerDataToDB } = require("../Controllers/becomePartner");
const { getPartnerData,getPartnerDataByDate } = require("../Controllers/getPartnerData");
const { postFormDetails } = require("../Controllers/postFormDetails");
const router = express.Router();

// Define the route for saving data to the database
router.post("/saveBecomePartnerData", becomePartnerDataToDB);
router.get("/getPartnerData", getPartnerData);
router.get("/getPartnerDataByDate/:date",getPartnerDataByDate);
router.post("/postFormDetails",postFormDetails);

module.exports = router;