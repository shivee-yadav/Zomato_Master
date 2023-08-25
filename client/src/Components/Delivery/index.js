import React, {useState, useEffect} from "react";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import DeliveryCarousal from "./DeliveryCarousal";

const Delivery = () => {
    // const [restaurantList, setRestaurantList] = useState([]);

    // const reduxState = useSelector(
    //     (globalStore) => globalStore.restaurant.restaurants
    // );

    // useEffect(()=> {
    //     setRestaurantList(reduxState.restaurants);
    // }, [reduxState.restaurants]);

    return(
        <>
        <DeliveryCarousal />
        </>
    );
};

export default Delivery;