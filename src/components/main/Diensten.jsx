import React, { useState } from "react";
import s from "../../styles/main.module.scss";
import Button from "../Button";
import SvgGraphic1 from "../../images/psd-board.svg";
import SvgGraphic2 from "../../images/psd-crane.svg";
import SvgGraphic3 from "../../images/psd-men-deal.png";
import SvgGraphic4 from "../../images/psd-desk-conversation.svg";

const Diensten = (props) => {
  const teksten = props.teksten;
  const en = props.engels;
  const [isOpen11, setOpen11] = useState(false);
  const [isOpen12, setOpen12] = useState(false);
  const [isOpen13, setOpen13] = useState(false);
  const [isOpen14, setOpen14] = useState(false);
  const [clamp11, setClamp11] = useState(true);
  const [clamp12, setClamp12] = useState(true);
  const [clamp13, setClamp13] = useState(true);
  const [clamp14, setClamp14] = useState(true);
  return (
    <div className={s.diensten} id="diensten">
      <div className={s.heading}>
        <div className={s.listBox}>
          <div className={s.header}>
            <span className={s.regularHeading}>Disciplines</span>
          </div>
          <div className={s.content}>
            <div className={s.listHeading}>
              {en
                ? "Woesik consult is experienced in:"
                : "Woesik consult is ervaren in:"}
            </div>
            <ul>
              {teksten.diensten.vakgebieden.map((item, i) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.title}>
            <div className={s.graphic}></div>
            <h2>{teksten.diensten.titel}</h2>
          </div>
          <p className={`${s.txtAndere} ${s.txt}`}>
            {teksten.diensten.beschrijving.andere}
          </p>
          <p className={`${s.txtDesktop} ${s.txt}`}>
            {teksten.diensten.beschrijving.desktop}
          </p>
        </div>
      </div>
      {/* maak het zo dat de titel en paragraph worden gefetched van een txt file en de bijbehorende gra[hics van een array komen voor uitbreiding] */}
      {/* IE is text volledig open, stel dit af met classnames */}
      {/* check of makkelijker is om gwn 2 losse texten te hebben voor 
        inklap en uitklap text of css elipses */}
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.contentWrapper}>
            <div className={s.txtSide}>
              <h3 className={s.title}>{teksten.diensten.kop1.titel}</h3>
              <p
                className={`${isOpen11 ? s.open : s.closed} ${
                  !isOpen11 && clamp11 ? s.clamped : ""
                }`}
              >
                {teksten.diensten.kop1.beschrijving}
              </p>
              <div
                onClick={() => {
                  if (isOpen11) {
                    setOpen11(false);
                    setTimeout(() => setClamp11(true), 550);
                  } else {
                    setClamp11(false);
                    setOpen11(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp11
                  ? en
                    ? "Read less…"
                    : "Lees minder…"
                  : en
                  ? "Read more…"
                  : "Lees meer…"}
              </div>
            </div>
            <div className={s.graphicSide}>
              <img src={SvgGraphic1} alt="" />
            </div>
          </div>
        </div>
        <div className={s.block}>
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
          {/* <span className={s.four}></span> */}
          <div className={s.contentWrapper}>
            <div className={s.txtSide}>
              <h3 className={s.title}>{teksten.diensten.kop2.titel}</h3>
              <p
                className={`${isOpen12 ? s.open : s.closed} ${
                  !isOpen12 && clamp12 ? s.clamped : ""
                }`}
              >
                {teksten.diensten.kop2.beschrijving}
              </p>
              <div
                onClick={() => {
                  if (isOpen12) {
                    setOpen12(false);
                    setTimeout(() => setClamp12(true), 550);
                  } else {
                    setClamp12(false);
                    setOpen12(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp12
                  ? en
                    ? "Read less…"
                    : "Lees minder…"
                  : en
                  ? "Read more…"
                  : "Lees meer…"}
              </div>
            </div>
            <div className={s.graphicSide}>
              <img src={SvgGraphic2} alt="" />
            </div>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.contentWrapper}>
            <div className={s.txtSide}>
              <h3 className={s.title}>{teksten.diensten.kop3.titel}</h3>
              <p
                className={`${isOpen13 ? s.open : s.closed} ${
                  !isOpen13 && clamp13 ? s.clamped : ""
                }`}
              >
                {teksten.diensten.kop3.beschrijving}
              </p>
              <div
                onClick={() => {
                  if (isOpen13) {
                    setOpen13(false);
                    setTimeout(() => setClamp13(true), 550);
                  } else {
                    setClamp13(false);
                    setOpen13(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp13
                  ? en
                    ? "Read less…"
                    : "Lees minder…"
                  : en
                  ? "Read more…"
                  : "Lees meer…"}
              </div>
            </div>
            <div className={s.graphicSide}>
              <img src={SvgGraphic3} alt="" />
            </div>
          </div>
        </div>
        <div className={s.block}>
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
          <div className={s.contentWrapper}>
            <div className={s.txtSide}>
              <h3 className={s.title}>{teksten.diensten.kop4.titel}</h3>
              <p
                className={`${isOpen14 ? s.open : s.closed} ${
                  !isOpen14 && clamp14 ? s.clamped : ""
                }`}
              >
                {teksten.diensten.kop4.beschrijving}
              </p>
              <div
                onClick={() => {
                  if (isOpen14) {
                    setOpen14(false);
                    setTimeout(() => setClamp14(true), 550);
                  } else {
                    setClamp14(false);
                    setOpen14(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp14
                  ? en
                    ? "Read less…"
                    : "Lees minder…"
                  : en
                  ? "Read more…"
                  : "Lees meer…"}
              </div>
            </div>
            <div className={s.graphicSide}>
              <img src={SvgGraphic4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diensten;
