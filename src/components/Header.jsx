import React from "react";
import s from "../styles/components/header.module.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={"/"}>
          <img src={logo} alt="vwcon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
