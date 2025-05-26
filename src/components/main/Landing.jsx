import React from "react";
import s from "../../styles/main.module.scss";
import berg from "../../images/berg.jpg";
import Button from "../Button";

const Landing = (props) => {
  const teksten = props.teksten;
  return (
    <div className={s.landing}>
      <div className={s.transp}>
        <div className={s.fixedImage}>
          <div className={s.overlay}></div>
          {/* <img src={berg} alt="" /> */}
        </div>
        <div className={s.info}>
          <div className={s.text}>
            <div className={s.top}>
              <h1>{teksten.landing.titel}</h1>
              {/* txt file */}
              {/* <span>Technisch-, project- en liaisonmanagement advies</span> */}
              {/* <br /> */}
              <span>{teksten.landing["sub-titel"]}</span>
            </div>
            <div className={s.bottom}>
              <p className={s.desktop}>
                {teksten.landing.beschrijving.desktop}
              </p>
              <p className={s.mobiel}>{teksten.landing.beschrijving.mobiel}</p>
              <div className={s.button}>
                <a href="#contact">
                  <Button button="head" content={teksten.landing.knop} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.white}></div>
    </div>
  );
};

export default Landing;
