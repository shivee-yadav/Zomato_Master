import React from "react";
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
    return(
        <>
        <div className="py-2">
        <h1 className="text-2xl text-zomato-800 pb-4">Inspiration for your first order</h1>
        <div className="flex flex-wrap justify-between">
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        </div>
        </div>
        </>
    )

};

export default DeliveryCarousal;