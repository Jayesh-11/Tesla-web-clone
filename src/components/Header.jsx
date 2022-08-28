import "./styles/Header.css";
import Header_logo from "../assets/logo/Header_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from "react";

function Header() {
  const [menu_state, setMenu_state] = useState("Button_sec");

  const update_menu = () => {
    console.log("clicked");
  };
  return (
    <div className="Header">
      <img src={Header_logo} className="Header_logo" alt="Header logo here" />
      <div className={menu_state}>
        <a href="https://shop.tesla.com/">
          <button>Shop</button>
        </a>
        <a href="https://www.tesla.com/teslaaccount">
          <button>Account</button>
        </a>
        <a href="https://www.tesla.com/careers">
          <button>Careers</button>
        </a>
        <a href="https://www.tesla.com/blog">
          <button>News</button>
        </a>
      </div>
      <IconContext.Provider value={{ className: "ham_button" }}>
        <GiHamburgerMenu onClick={update_menu} />
      </IconContext.Provider>
    </div>
  );
}

export default Header;
