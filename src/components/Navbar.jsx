import React from 'react'
import { FaRegMoon } from "react-icons/fa";

const Menu = () => 
{
    return(
        <div className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="https://github.com/danii-ree">GitHub</a></li>
            <li><a href="#Nightmode"><FaRegMoon/></a></li>
        </div>
    );
}
export default Menu