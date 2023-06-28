import express from "express";
import passport from "passport";

import { FoodModel } from "../../database/food";

import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";

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

        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const food = await FoodModel.find({ restaurant: _id });

        return res.json({ food });

    } catch(error) {
        return res.status(500).json({error: error.message});

    }
});


/*
Route          /r
Des            Get all the food based on particular category
Params         category
Access         Public
Method         GET
*/
Router.get("/r/:category" , async(req,res) => {
    try{

        await ValidateCategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({ 
            category: {$regex: category, $options: "i"}
        });

        return res.json({ foods });

    } catch(error) {
        return res.status(500).json({error: error.message});

    }
});

export default Router;