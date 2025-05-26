import React from "react";
import s from "../../styles/main.module.scss";
import { Link } from "react-router-dom";
import FvW from "../../images/FvW.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CCfrank = (props) => {
  const teksten = props.teksten;
  const frank = teksten["contact-frank"];
  return (
    <div className={s.contactFrankWrapper}>
      <div className={s.contactFrank} id="contact">
        <div className={s.svgs}>
          <div className={s.front}></div>
          <svg
            className={s.svg1}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            viewBox="0 0 1000 100"
          >
            <g>
              <path d="M0 6C393.123 133.964 611.851 129.006 999.5 6H0Z" />
            </g>
          </svg>
          <svg
            className={s.svg2}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            viewBox="0 0 1000 100"
          >
            <g>
              <path d="M0 6C393.123 133.964 611.851 129.006 999.5 6H0Z" />
            </g>
          </svg>
        </div>
        <div className={s.container}>
          <img className={s.photo} src={FvW} alt="" />
          <div className={s.graphic}></div>

          <div className={s.text}>
            <span className={s.heading}>{frank.titel}</span>
            <br />
            <span className={s.phone}>
              Neem contact op met:
              <br />
              {frank.naam}
              <br />
              {frank.telefoon}
            </span>
            <div className={s.LinkedIn}>
              <Link target="blank" to={frank["linkedIn-link"]}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCfrank;
