import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from "../pages/login/Login";

export const RouteHandler=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}