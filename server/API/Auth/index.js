import express from "express";
import bcrypt from "bcryptjs";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

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

//hashing ->encrypting your password in a non-understandable code
//salting ->encrypting again and again to increase the security

        const bcryptSalt = await bcrypt.genSalt(8);//salting will be done 8 times

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);//the password is being hashed and then salted


    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;

//Password->Shivee
//encrypted once -> 2356dvdjrfgvzcdwdefw4  ->encryptedtwice--->242645855hbxvstwsdzyr565r
//good websites have 5-10 encryptions of passwords
//bcrypt.js -> for encryptions