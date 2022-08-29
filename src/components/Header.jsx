import "./styles/Header.css";
import Header_logo from "../assets/logo/Header_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [menu_state, setMenu_state] = useState("Button_sec");
  const [isHamClicked, setisHamClicked] = useState(false);

  const update_menu = () => {
    console.log("clicked");
    if (isHamClicked) {
      setMenu_state("Button_sec_clicked");
    } else {
      setMenu_state("Button_sec");
    }
    setisHamClicked(!isHamClicked);
  };

  return (
    <div className="Header">
      <a href="/">
        <img src={Header_logo} className="Header_logo" alt="Header logo here" />
      </a>
      <motion.div
        className={menu_state}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
      <IconContext.Provider value={{ className: "ham_button" }}>
        <GiHamburgerMenu onClick={update_menu} id="ham_trigger" />
      </IconContext.Provider>
    </div>
  );
}

export default Header;
