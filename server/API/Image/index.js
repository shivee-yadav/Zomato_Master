import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/image";

import {s3Upload} from "../../Utilities/AWS/s3";

const Router = express.Router();

const storage = multer.memoryStorage();//storing everything in the RAM of the server
const upload = multer({storage});//uploading the content of the server to AWS


/*
Route          /
Des            uploading images to s3 bucket, then saving the file to the MongoDB
Params         None
Access         Public
Method         GET
*/

Router.post("/", upload.single("file"), async (req,res) => {//we'll upload a file
    try{
        const file=req.file;

        console.log(file);

       const bucketOptions = {
        Bucket: "shivee-bucket",//bucketname
        Key : file.originalname,//name
        Body: file.buffer,//url
        ContentType: file.mimetype,//filetype
        ACL: "public-read"//read only //Access Control List
       } ;

      
    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
       
       
    } catch (error) {

        return res.status(500).json({error: error.message});

    }
});

export default Router;