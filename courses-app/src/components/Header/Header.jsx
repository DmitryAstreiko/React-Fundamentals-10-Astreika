import React from "react";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import '../../App.css';


function Header() {
    return (
        <div className="HeaderApp">
            <Logo />
            <label>Dzmitry</label>
            <Button buttonText="Logout"/>
        </div>
    )
} 

export default Header;