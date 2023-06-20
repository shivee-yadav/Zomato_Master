const express = require("express");
//require is old feature,import is es6 feature
//babel - enabling es6

const zomato = express();

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!!"}));

zomato.listen(4000, () => console.log("Server is up and running"));

