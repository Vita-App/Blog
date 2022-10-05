// react imports
import React, { useState } from "react";

// image imports
import Logo from "../images/logo.png";

// CSS imports
import "../styles/navbar.css";

// Component imports
import HamburgerBtn from "./HamburgerBtn";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="nav-container" className="flex flex-row p-6 shadow-lg">
        <div id="nav-brand" className="flex flex-row space-x-2">
          <img id="vita-logo" alt="" src={Logo} />
          <div className="flex justify-center items-center">
            <p id="brand-title">Vita Blog</p>
          </div>
        </div>
        <div
          id="nav-link-container"
          className="flex  desktop:flex tablet:flex mobile:hidden  flex-row ml-auto space-x-3 justify-center items-center"
        >
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
        <div
          id="nav-link-container"
          className="flex  desktop:hidden tablet:hidden mobile:flex  flex-row ml-auto justify-center items-center"
        >
          <button onClick={handleToggle}>
            <HamburgerBtn />
          </button>
        </div>
      </div>
      <div
        className={`collapsed-navbar desktop:hidden tablet:hidden ${
          menuOpen ? "flex" : "hidden"
        } justify-center item-center`}
      >
        <ul className="flex flex-col btn-list">
          <li>
            <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
              Home
            </a>
          </li>
          <li>
            <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
              Articles
            </a>
          </li>
          <li>
            <a id="nav-link" className="py-3 px-6 rounded-full" href="#">
              About
            </a>
          </li>
          <li>
            <a id="login-btn" className="py-3 px-6 rounded-full" href="#">
              Login
            </a>
          </li>
          <li>
            <a id="signup-btn" className="py-3 px-6 rounded-full" href="#">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavigationBar;
