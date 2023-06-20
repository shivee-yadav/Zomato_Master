const express = require("express");
//require is old feature,import is es6 feature
//babel - enabling es6
import cors from "cors";
import helmet from "helmet";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!!"}));

zomato.listen(4000, () => console.log("Server is up and running"));

//cors->package to maintain so many API calls
//helmet ->added for extra security layers