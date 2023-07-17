import React from "react"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Home } from "../pages/home/Home";
import { Item } from "../pages/item/Item";
import {Login} from "../pages/login/Login";
import {Customer} from "../pages/customer/Customer"
import {Order} from "../pages/order/Order";
import {OrderDetails} from "../pages/orderDetails/OrderDetails";
import { Header } from "../header/Header";

export const RouteHandler=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/customer" element={<Customer/>} />
                <Route path="/item" element={<Item/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/orderdetails" element={<OrderDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}