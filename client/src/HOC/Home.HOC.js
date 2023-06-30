import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({component: Component, ...rest }) => {
    return(
        <Routes>
            <Route {...rest} element={<HomeLayout><Component /></HomeLayout>} />    
        </Routes>
    );
};

export default HomeLayoutHOC;