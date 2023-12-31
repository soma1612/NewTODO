import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Completed from "../pages/Completed";
import Trash from "../pages/Trash";
import MuiTab from "../controls/Tab";

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <MuiTab />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/completed" element={<Completed />}></Route>
                    <Route path="/trash" element={<Trash />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;