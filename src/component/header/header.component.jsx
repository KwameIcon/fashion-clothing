import React from "react";

import './header.style.scss'
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/084 crown.svg";

const Header = () => (
    <div className="header">
        <Link to={'/'} className="logo-container">
            <Logo className = "logo"/>
        </Link>
        <div className="options">
            <Link to={'shop'} className="option">Shop</Link>
            <Link to={'shop'} className="option">Contact</Link>
        </div>
    </div>
)

export default Header;