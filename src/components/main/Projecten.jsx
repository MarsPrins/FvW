import React from "react";
import s from "../../styles/main.module.scss";
import { Link } from "react-router-dom";

const Projecten = (props) => {
  const teksten = props.teksten;
  const en = props.engels;
  const projectArray = [
    "civiel",
    "drinkwater",
    "energie",
    "infra",
    "utiliteitsbouw",
    "parkeergarages",
    "specials",
  ];
  const projectArrayEN = [
    "civil 1",
    "drinking water",
    "energy",
    "infra",
    "civil 2",
    "parking garages",
    "specials",
  ];

  const array = en ? projectArrayEN : projectArray;
  return (
    <div className={s.projecten} id="projecten">
      <div className={s.container}>
        <div className={s.heading}>
          <div className={s.title}>
            <div className={s.graphic}></div>
            <h2>{teksten.projecten.titel}</h2>
          </div>
          <p>{teksten.projecten.beschrijving}</p>
        </div>
        <div className={s.cards}>
          {array.map((proj, i) => {
            return (
              <div key={proj} className={s.card}>
                <Link to={en ? "/en" + "/project/" + proj : "/project/" + proj}>
                  <div className={s.innerCard}>
                    <h3>{proj}</h3>
                    <span className={s.graphic}></span>
                  </div>
                  <div className={s.bottom}>
                    <span>open</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projecten;
