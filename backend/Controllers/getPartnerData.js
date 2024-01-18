const becomePartner = require('../models/becomePartner');

exports.getPartnerData = async(req,res) => {
    try{
        const data = await becomePartner.find({});
        res.status(200).json(
            {
                success:true,
                data:data,
                message:"data fetched"
            }
        )
    }
    catch(err){
        console.log("error",err);
        res.status(500).json(
            {
                success:false,
                data:"failed to fetch data",
                message:err.message
            }
        )
    }
}