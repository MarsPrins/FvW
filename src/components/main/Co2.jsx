import React, { useState } from "react";
import s from "../../styles/main.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import Trees4all from "../../images/trees4all.svg";

const Co2 = (props) => {
  const en = props.engels;
  const teksten = props.teksten;
  const co2 = teksten["co2-compensatie"];
  const [isOpen, setOpen] = useState(false);
  const [isClamp, setClamp] = useState(true);

  return (
    <div className={s.co2Wrapper}>
      <span>
        <span className={s.leftDetail}></span>
        <span className={s.leftDetail}></span>
        <span className={s.leftDetail}></span>
      </span>
      <span>
        <span className={s.rightDetail}></span>
        <span className={s.rightDetail}></span>
        <span className={s.rightDetail}></span>
      </span>
      <div className={s.co2} id="co2-compensatie">
        <div className={s.container}>
          <div className={s.left}>
            <div className={s.text}>
              <div className={s.heading}>
                <div className={s.title}>
                  <div className={s.graphic}></div>
                  <h2>{co2.titel.titel}</h2>
                  <span>{co2.titel["sub-titel"]}</span>
                </div>
              </div>
              <p
                className={`${isOpen ? s.open : s.closed} ${
                  isClamp ? s.clamped : ""
                }`}
              >
                {co2.beschrijving}{" "}
                <Link to={"https://www.treesforall.nl"}>
                  www.treesforall.nl
                </Link>
              </p>
              <div
                onClick={() => {
                  if (isOpen) {
                    setOpen(false);
                    setTimeout(() => setClamp(true), 450);
                  } else {
                    setClamp(false);
                    setOpen(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!isClamp ? "Lees minder…" : "Lees meer…"}
              </div>
            </div>
            <div className={s.certificate}>
              <Link to={en ? "/en/certificate" : "/certificaat"}>
                <Button button="regular" content={co2.knop} />
              </Link>
            </div>
            {/* <div className={s.logo}>
              <img src={Trees4all} alt="" />
            </div> */}
          </div>
          <div className={s.right}>
            <div className={s.rightContainer}>
              <div className={s.logo}>
                <img src={Trees4all} alt="" />
              </div>
              <div className={s.certificate}>
                <Link to={en ? "/en/certificate" : "/certificaat"}>
                  <Button button="regular" content={co2.knop} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Co2;
