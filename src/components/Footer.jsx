import React from "react";
import s from "../styles/components/footer.module.scss";
import logo from "../images/logo.png";
import berg from "../images/berg.jpg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// logo overmaken in figma naar svg
const Footer = (props) => {
  const currYear = new Date().getFullYear();
  const location = useLocation();
  const isEnglishPage = location.pathname.startsWith("/en");
  const teksten = isEnglishPage
    ? props.tekstenEN.footer
    : props.tekstenNL.footer;

  return (
    <div className={s.wrapper}>
      <div className={s.footer}>
        <div className={s.container}>
          <div className={s.links}>
            <div className={s.linkPart}>
              <span className={s.header}>{teksten.lijst1.titel}</span>
              <ul>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <Link to={"/"}> {teksten.lijst1.deel1}</Link>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#diensten"}>{teksten.lijst1.deel2}</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#projecten"}>{teksten.lijst1.deel3}</a>
                </li>
                <li>
                  {/* andere naam? */}
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#co2-compensatie"}>{teksten.lijst1.deel4}</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#over-frank-van-woesik"}>{teksten.lijst1.deel5}</a>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />
                  <a href={"/#contact"}>{teksten.lijst1.deel6}</a>
                </li>
              </ul>
            </div>
            <div className={s.linkPart}>
              <span className={s.header}>{teksten.lijst2.titel}</span>
              <ul>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <Link to={isEnglishPage ? "/en/pdf/cv-EN" : "/pdf/cv"}>
                    {teksten.lijst2.deel1}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <Link
                    to={
                      isEnglishPage
                        ? "/en/pdf/terms-conditions"
                        : "/pdf/algemeen"
                    }
                  >
                    {teksten.lijst2.deel2}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className={s.icon} icon={faCircle} />

                  <Link to={"/pdf/privacy"}>{teksten.lijst2.deel3}</Link>
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
          Copyright © 2010-{currYear} van Woesik Consult B.V. -{" "}
          {isEnglishPage ? "ALl rights reserved" : "Alle rechten voorbehouden"}
        </div>
      </div>
    </div>
  );
};

export default Footer;
