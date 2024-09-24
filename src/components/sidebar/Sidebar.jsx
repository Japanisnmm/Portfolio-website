import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo1.svg";

function Sidebar() {
  const [toggle,showMenu] =useState(false)
  
  return (
    <>
    <aside className={toggle ? "aside show-menu": "aside"}>
      <a href="#home" className="nav__logo">
        <img src={Logo}  alt="" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; Thundarin - 2024 </span>
      </div>
    </aside>

    <div className={toggle ? "nav_toggle nav_toggle-open":"nav_toggle" } 
    onClick={()=> showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
}

export default Sidebar;
