import React from "react";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
        alt=""
      />
      <IconButton>
        <MessageIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
