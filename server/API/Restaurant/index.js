import { RestaurantModel }  from "../../database/allModels";
import express from "express";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route          /
Des            Get all the restaurants
Params         None
Access         Public
Method         GET
*/

Router.get("/", async(req,res) => {
    try{

        await ValidateRestaurantId(req.params);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /
Des            Get particular restaurants details on id
Params         _id
Access         Public
Method         GET
*/

Router.get("/:_id", async(req,res) => {
    try{

        await ValidateRestaurantCity(req.query);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant)  
        return res.status(404).json({error: "Restaurant not found"});

        return res.json({restaurant});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /search
Des            Get  restaurants details search
Params         none
body           searchString
Access         Public
Method         GET
*/

Router.get("/search", async (req,res) => {
    try{

        await ValidateRestaurantSearchString(req.body);

        const { searchString } = req.body;

        //this will find the restaurants having name that the searchString has
        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"}//"i" is to make the search case insensitive
        });

        return res.json({restaurants});

    } catch (error){

        return res.status(500).json({error: error.message});
    }
});



export default Router;