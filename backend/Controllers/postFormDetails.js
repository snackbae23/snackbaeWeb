const restaurantDetails = require("../models/restaurantDetails");
const restaurantLogin = require("../models/restaurantLogin");
// const otpGenerator = require('otp-generator');
const { otpGen } = require('otp-gen-agent');

exports.postFormDetails = async (req, res) => {
    try {
        const { restaurantName, cuisineType, location, pocContact, email, contactPerson, openingHour, closingHour, reservationPolicy, ambienceDescription, capacity, numberOfTables, specialties, currentPromotions, dietaryRestrictions, preferredPaymentMethod, specialties1, currentPromotion, agree } = req.body;

        // const otp = await otpGenerator.generate(6,{digits:true,upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets: false});
        const otp = await otpGen();
        console.log(otp);
        
        const response = await restaurantDetails.create({ restaurantName, cuisineType, location, pocContact, email, contactPerson, openingHour, closingHour, reservationPolicy, ambienceDescription, capacity, numberOfTables, specialties, currentPromotions, dietaryRestrictions, preferredPaymentMethod, specialties1, currentPromotion, agree });
        console.log(req.body.email);

        const responseLogin = await restaurantLogin.create({details: response._id,username: email,password: otp});

        res.status(201).json({
            success: true,
            response,
            responseLogin,
        });
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json(
            {
                success: false,
                data: "failed to post data",
                message: err.message
            }
        )
    }
};