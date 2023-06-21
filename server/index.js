require("dotenv").config();

const express = require("express");
//require is old feature,import is es6 feature
//babel - enabling es6
import cors from "cors";
import helmet from "helmet";

import Auth from "./API/Auth"

import connection from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//for application routes
//loacalhost:4000/auth/signup
zomato.use("/auth", Auth);

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!!"}));

zomato.listen(4000, () => 
connection().then(() => console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));

//cors->package to maintain so many API calls
//helmet ->added for extra security layers