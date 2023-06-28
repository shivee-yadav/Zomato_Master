import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

import { ValidateSignup , ValidateSignin } from "../../validation/auth";

import passport from "passport";


/*
Route      /signup
Descrip    signup with email and password
Params     None
Access     Public
Method     POST
*/

Router.post("/signup", async (req, res) => {
  try {

    await ValidateSignup(req.body.credentials);

    await UserModel.findEmailAndPhone(req.body.credentials);

    //DB
    const newUser = await UserModel.create(req.body.credentials);

    //JWT Auth Token
    const token = newUser.generateJwtToken();

    return res.status(200).json({token});


  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route      /signin
Descrip    signin with email and password
Params     None
Access     Public
Method     POST
*/

Router.post("/signin", async (req, res) => {
  try {

    await ValidateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(
      req.body.credentials
    );

    //JWT Auth Token
    const token = user.generateJwtToken();

    return res.status(200).json({token, status:"success"});


  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route      /google
Descrip    google signin
Params     None
Access     Public
Method     GET
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
}));

/*
Route      /google/callback
Descrip    google signin callback
Params     None
Access     Public
Method     GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
}

);



export default Router;



//Password->Shivee
//encrypted once -> 2356dvdjrfgvzcdwdefw4  ->encryptedtwice--->242645855hbxvstwsdzyr565r
//good websites have 5-10 encryptions of passwords
//bcrypt.js -> for encryptions

//UserModel.OurStatic() ->
//checkUserByEmail.ourMethods() ->  to refractor our code
// const bcryptSalt = await bcrypt.genSalt(8); //salting will be done 8 times

// const hashedPassword = await bcrypt.hash(password, bcryptSalt); //the password is being hashed and then salted
