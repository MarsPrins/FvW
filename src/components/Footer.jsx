import React from "react";
import s from "../styles/components/footer.module.scss";
import logo from "../images/logo.svg";
import berg from "../images/berg.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// logo overmaken in figma naar svg
const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <div className={s.wrapper}>
      <div className={s.footer}>
        <div className={s.container}>
          <div className={s.links}>
            <div className={s.linkPart}>
              <span className={s.header}>Pagina</span>
              <ul>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <Link to={"/"}> Thuis</Link>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#diensten"}>Diensten</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#projecten"}>Projecten</a>
                </li>
                <li>
                  {/* andere naam? */}
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#co2-compensatie"}>Co2 compensatie</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#over-frank-van-woesik"}>Over ons</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#contact"}>Contact</a>
                </li>
              </ul>
            </div>
            <div className={s.linkPart}>
              <span className={s.header}>Documenten</span>
              <ul>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <a href={`/cv`}>Frank van Woesik CV</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <a href={`/algemeene-voorwaarden`}>Algemene voorwaarden</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <a href={`/Rechtsverhouding`}>Privacyverklaring</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.graphic}>
            <div className={s.graphicContainer}>
              <img className={s.berg} src={berg} alt="" />
              <img className={s.logo} src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className={s.copyright}>
          Copyright © 2025-{currYear} van Woesik Consult B.V. - Alle rechten
          voorbehouden
        </div>
      </div>
    </div>
  );
};

export default Footer;
