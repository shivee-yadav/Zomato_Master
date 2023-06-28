import joi from "joi";
import { UserModel } from "../database/user";

export const ValidateSignup = (UserData) => {

const Schema = joi.object({
    fullname: joi.string().required().min(3) ,
    email: joi.string().email(),
    password: joi.string().min(5),
    address: joi.array().items(joi.object({detail: joi.string(), for: joi.string()})),
    phoneNumber: joi.number()
}) ;

return Schema.validateAsync(UserData);

};


export const ValidateSignin = (UserData) => {

const Schema = joi.object({
    
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
    
}) ;

return Schema.validateAsync(UserData);

};