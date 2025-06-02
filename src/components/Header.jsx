import React from "react";
import s from "../styles/components/header.module.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const location = useLocation();

  const path = location.pathname;
  const isEnglishPage = path.startsWith("/en");
  const isHomePage = path === "/" ? true : path === "/en/" ? true : false;
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={isEnglishPage ? "/en/" : "/"}>
          <img className={isHomePage && s.homePage} src={logo} alt="vwcon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
