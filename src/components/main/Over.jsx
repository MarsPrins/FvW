import React, { useState } from "react";
import s from "../../styles/main.module.scss";
import { Link } from "react-router-dom";

const Over = (props) => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [clamp1, setClamp1] = useState(true);
  const [clamp2, setClamp2] = useState(true);
  const teksten = props.teksten;
  const overFrank = teksten["over-frank"];

  return (
    <div className={s.over} id="over-frank-van-woesik">
      <div className={`${s.container}`}>
        <div className={s.heading}>
          <div className={s.title}>
            <div className={s.graphic}></div>
            <h2 className={s.desktop}>
              {overFrank.titel.andere["andere-titel"]}
            </h2>
            <h2 className={s.mobile}>
              {overFrank.titel.mobiel["mobiel-titel"]}
            </h2>
          </div>
          <span className={s.mobile}>
            "{overFrank.titel.mobiel["sub-titel"]}"
          </span>
        </div>

        <div className={s.texts}>
          <div className={s.starter}>
            <div className={s.part1}>
              <div className={s.dates}>
                <div className={s.graphic}></div>
                <div className={s.dateNumbers}>{overFrank.deel1.jaartal}</div>
              </div>
              <p
                className={`${isOpen1 ? s.open : s.closed} ${
                  !isOpen1 && clamp1 ? s.clamped : ""
                }`}
              >
                {overFrank.deel1.beschrijving.sectie1}
                <br />
                {overFrank.deel1.beschrijving.sectie2}
                <br />
                {overFrank.deel1.beschrijving.sectie3}
                <br />
                {overFrank.deel1.beschrijving.sectie4}
                <br />
                {overFrank.deel1.beschrijving.sectie5}
              </p>
              <div
                onClick={() => {
                  if (isOpen1) {
                    setOpen1(false);
                    setTimeout(() => setClamp1(true), 400);
                  } else {
                    setClamp1(false);
                    setOpen1(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp1 ? "Lees minder…" : "Lees meer…"}
              </div>
            </div>
            <div className={s.part2}>
              <div className={s.dates}>
                <div className={s.graphic}></div>
                <div className={s.dateNumbers}>{overFrank.deel2.jaartal}</div>
              </div>
              <p
                className={`${isOpen2 ? s.open : s.closed} ${
                  !isOpen2 && clamp2 ? s.clamped : ""
                }`}
              >
                {overFrank.deel2.beschrijving.sectie1}
                <br />
                {overFrank.deel2.beschrijving.sectie2}
                <br />
                {overFrank.deel2.beschrijving.sectie3}
              </p>
              <div
                onClick={() => {
                  if (isOpen2) {
                    setOpen2(false);
                    setTimeout(() => setClamp2(true), 400);
                  } else {
                    setClamp2(false);
                    setOpen2(true);
                  }
                }}
                className={s.leesMeer}
              >
                {!clamp2 ? "Lees minder…" : "Lees meer…"}
              </div>
            </div>
          </div>
          <div className={s.finisher}>
            <div className={s.part3}>
              <div className={s.dates}>
                <div className={s.graphic}></div>
                <div className={s.dateNumbers}>{overFrank.deel3.jaartal}</div>
              </div>
              <p
              // className={`${isOpen3 ? s.open : s.closed} ${
              //   !isOpen3 && clamp3 ? s.clamped : ""
              // }`}
              >
                {overFrank.deel3.beschrijving.sectie1}
                <br />
                <span>
                  Frank zijn karakter is weergegeven in het volgende{" "}
                  <Link to={"/disc"}>DISC profiel</Link>
                </span>
              </p>
              {/* <div
                  onClick={() => {
                    if (isOpen3) {
                      setOpen3(false);
                      setTimeout(() => setClamp3(true), 300);
                    } else {
                      setClamp3(false);
                      setOpen3(true);
                    }
                  }}
                  className={`${s.leesMeer} ${s.leesMeer3}`}
                >
                  {!clamp3 ? "Lees minder…" : "Lees meer…"}
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Over;
