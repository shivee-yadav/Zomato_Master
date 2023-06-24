import express from "express";

import { ImageModel } from "../../database/image";

const Router = express.Router();

//AWS S3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyID: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});

/*
Route          /
Des            uploading images to s3 bucket, then saving the file to the MongoDB
Params         None
Access         Public
Method         GET
*/

Router.post("/", async (req,res) => {
    try{

    } catch (error) {

    }
});

export default Router;