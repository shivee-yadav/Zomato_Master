import express from "express";

const Router = express.Router();

/*
Route      /signup
Descrip    signup with email and password
Params     None
Access     Public
Method     POST
*/

Router.post("/signup" , async(req,res) => {
    try{
        const { email , password, fullname, phoneNumber } = req.body.credentials;

        //check whether the email or phone number exists
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if( checkUserByEmail || checkUserByPhone ){
            return res.json({error: "User already exists"});
        }

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;