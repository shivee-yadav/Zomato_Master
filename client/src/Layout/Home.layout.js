import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

//import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getRestaurant());
    // },[]);

    return (
    <>
    <div className="container mx-auto lg:px-20">
        <Navbar />
    {props.children}
    
    </div>
    
    <FoodTab />
   
    </>
    );
}

export default HomeLayout;