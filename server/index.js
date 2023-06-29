require("dotenv").config();

const express = require("express");
//require is old feature,import is es6 feature
//babel - enabling es6
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";

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

routeConfig(passport);

//for application routes
//loacalhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image",Image);
zomato.use("/order", Order);
zomato.use("/reviews",Reviews);
zomato.use("/user",User);

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!!"}));

zomato.listen(4000, () => 
connection().then(() => console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));

//cors->package to maintain so many API calls
//helmet ->added for extra security layers

//aws:
//upload the images to the server's RAM -> from server's RAM the images are being uploaded to the AWS -> from AWS the images are being fetched into the App


//joi->joi lets you describe your data using a simple, intuitive, and readable language.


//redux-> connects frontend to backend
//