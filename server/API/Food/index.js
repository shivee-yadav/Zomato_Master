import express from "express";
import passport from "passport";

import { FoodModel } from "../../database/food";

const Router = express.Router();

/*
Route          /
Des            Get all the food based on the particlar restaurant
Params         _id
Access         Public
Method         GET
*/
Router.get("/:_id" , async(req,res) => {
    try{

        const {_id} = req.params;
        const food = await FoodModel.find({ restaurant: _id });

        return res.json({ food });

    } catch(error) {
        return res.status(500).json({error: error.message});

    }
});


/*
Route          /
Des            Get all the food based on the particlar restaurant
Params         _id
Access         Public
Method         GET
*/
Router.get("/:_id" , async(req,res) => {
    try{

        const {_id} = req.params;
        const food = await FoodModel.find({ restaurant: _id });

        return res.json({ food });

    } catch(error) {
        return res.status(500).json({error: error.message});

    }
})