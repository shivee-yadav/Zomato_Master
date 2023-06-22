import express from "express";
import { MenuModel } from "../../database/menu";
import { ImageModel } from "../../database/image";

const Router = express.Router();

/*
Route          /list
Des            Get the list of menu of a particular restaurants
Params         _id
Access         Public
Method         GET
*/

Router.get("/list/:_id", async(req,res) => {

    try{
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({menus});

    } catch(error){
        return res.status(500).json({error: error.message});
    }
});


/*
Route          /image
Des            Get the  menu image of a particular restaurants
Params         _id
Access         Public
Method         GET
*/

Router.get("/image/:_id", async(req,res) => {

    try{
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});

    } catch(error){
        return res.status(500).json({error: error.message});
    }
});


export default Router;