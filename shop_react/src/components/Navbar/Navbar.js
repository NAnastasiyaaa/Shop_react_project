import React from "react";
import MenuItems from "./MenuItems";
import logo from "./images/logo_page.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="NavbarItems">
        <img className="logo_image" src={logo} alt="Logo" />
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
