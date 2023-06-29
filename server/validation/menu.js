import joi, { object } from "joi";
import { FoodModel } from "../database/user";

export const ValidateRestaurantMenu = (resMenu) => {

const Schema = joi.object({
    _id: joi.string().required(),
    menus:joi.array().items(object.joi({name:joi.string().required(), items: joi.array().items(joi.object()) }))
}) ;

return Schema.validateAsync(resMenu);

};