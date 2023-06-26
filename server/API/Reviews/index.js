import express from "express";

import { ReviewModel } from "../../database/reviews";

const Router = express.Router();


/*
Route            /new
Des             Add new review
Params           none
body             review object
Access           Public
Method           POST
*/

Router.post("/new/:_id", async(req,res)=> {
    try {
      
     const { reviewData } = req.body;

     await ReviewModel.create(reviewData);

     return res.json({review: "Successfully created Review"});

    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  });

  
  /*
  Route            /delete
  Des             delete new review
  Params           _id
  Access           Public
  Method           DELETE
  */
  
  Router.delete("/delete/:_id", async(req,res)=> {
      try {
        
       const { _id } = req.params;
  
       await ReviewModel.findByIdAndDelete(_id);
  
       return res.json({review: "Successfully deleted Review"});
  
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    });


  export default Router;
