import React from "react";
import logo from '../../images/logo.png'
import './Header.css'

const Header = () =>{
    return(
        <div className="header text-center">
            
            <img className="logo" src={logo}></img>
            
            <nav className="navbar py-1">
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
            
            <div className="search-box">
                <form className="w-75 mx-3">
                    <input type="search" className="form-control" placeholder="Type here to search..." aria-label="Search"/>
                </form>
            </div>

        </div>
    );
}

export default Header;