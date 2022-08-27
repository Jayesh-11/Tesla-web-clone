import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <div className="Header">
      Header-div
      <div className="Images_sec"></div>
      <div className="Button_sec">
        <a href="https://shop.tesla.com/">
          <button>Shop</button>
        </a>
        <a href="https://www.tesla.com/teslaaccount">
          <button>Account</button>
        </a>
        <a href="">
          <button>Menu</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
