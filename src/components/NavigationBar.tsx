// react imports
import React from "react";


// image imports
import Logo from "../images/logo.png"


// CSS imports
import '../styles/global.css';
import "../styles/navbar.css";

function NavigationBar() {
    return(
        <>
        <div id="nav-container" className="flex flex-row p-6 shadow-lg">
            <div id="nav-brand" className="flex flex-row space-x-2">
                <img id="vita-logo" alt="" src={Logo}/>
                <div className="flex justify-center items-center">
                <p id="brand-title">Vita Blog</p>
                </div>
            </div>
            <div id="nav-link-container" className="flex flex-row ml-auto space-x-3 justify-center items-center">
                <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
                    Home
                </a>
                <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
                    Articles
                </a>
                <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
                    About
                </a>
                <a id="login-btn" className="py-3 px-6 rounded-full" href="#">
                    Login
                </a>
                <a id="signup-btn" className="py-3 px-6 rounded-full" href="#">
                    Signup
                </a>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;