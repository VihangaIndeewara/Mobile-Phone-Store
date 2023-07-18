import React from 'react';
import { Header } from "../header/Header"
import { Link, NavLink } from "react-router-dom"

export const NavBar=()=>{
    return(
        <Header>
        <div>
            <div id="navList">
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <NavLink to={"/home"} className="navItem">Home</NavLink>
                        <NavLink to={"/customer"}  className="navItem">Customer</NavLink>
                        <NavLink to={"/item"} className="navItem">Item</NavLink>
                        <NavLink to={"/order"} className="navItem">Order</NavLink>
                        <NavLink to={"/orderdetails"} className="navItem">Order Details</NavLink>
                    
                    </div>
                </div>

                
            </div>

            <Link to={"/login"}>
                <button className="btnLogout" type="button"  >Log Out</button>
            </Link>
       </div>
    </Header>
    )
}