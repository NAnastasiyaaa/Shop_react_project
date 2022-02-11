import React, { useState } from "react";
import MenuItems from "./MenuItems";
import logo from "./images/logo_page.jpg";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar({ changeSeacrh, search }) {
  const handleChange = (value) => {
    changeSeacrh(value);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <img className="logo_image" src={logo} alt="Logo" />

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName + (item.isActive ? " active" : "")}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {window.location.pathname === "/catalog" && (
          <>
            <input
              className="searchInput"
              // value={filter} onChange={searchText.bind(this)}
              value={search}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
