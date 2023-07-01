import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { IoFootstepsOutline } from  "react-icons/io5";


const MobileTab = () => {
    

    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: "Delivery",
            isActive: false
        },
        {
            id: `nightlife`,
            icon: <IoBeerOutline />,
            name: "Night Life",
            isActive: false
        },
        {
            id: `dining`,
            icon: <IoFootstepsOutline />,
            name: "Dining",
            isActive: false

        }
    ]);

    const {type} = useParams();
    

    return (
        <>
        <div className="lg:hidden bg-white shadow-inner shadow-gray-300 p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-500"> 
       {allTypes.map((items) => (
        <Link to={`/${items.id}`}>
            <div
            className={
                type === items.id 
                ? "flex flex-col relative items-center text-xl text-zomato-400 "
                : "flex flex-col items-center text-xl "
            }
            >
                <div 
                className={
                    type===items.id && 
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400 "
                }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>

            </div>
        </Link>
       ))

       }

        </div>
        </>
    )

}

const FoodTab = () => {
    return (
        <>
        <div >
        <MobileTab />
        </div>
        </>
    )
};

export default FoodTab;
/*

<div className="flex flex-col items-center text-xl">
            <BsHandbag />
            <h5>Delivery</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
            <IoFootstepsOutline />
            <h5>Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
            <IoBeerOutline />
            <h5>Night Life</h5>
        </div>

*/