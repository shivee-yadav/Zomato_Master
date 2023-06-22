require("dotenv").config();

const express = require("express");
//require is old feature,import is es6 feature
//babel - enabling es6
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";

import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";

import connection from "./database/connection";

const session = require('express-session');

const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);

//for application routes
//loacalhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!!"}));

zomato.listen(4000, () => 
connection().then(() => console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));

//cors->package to maintain so many API calls
//helmet ->added for extra security layers