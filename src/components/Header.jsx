import React, { useState } from "react";
import s from "../styles/components/header.module.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import iconEN from "../images/english-icon.png";
import iconNL from "../images/netherlands-icon.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const isHomePage = path === "/" ? true : path === "/en/" ? true : false;
  const isEnglishPage = path.startsWith("/en");

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={isEnglishPage ? "/en/" : "/"}>
          <img className={isHomePage && s.homePage} src={logo} alt="vwcon" />
        </Link>
      </div>
      <div className={s.language}>
        <Link to={isEnglishPage ? "/" : "/en/"}>
          <div className={s.container}>
            <img src={isEnglishPage ? iconNL : iconEN} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
