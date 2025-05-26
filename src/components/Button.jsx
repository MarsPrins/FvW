import React from "react";
import s from "../styles/components/button.module.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  const button = props.button;
  const content = props.content;
  const route = props.route;
  if (button === "head") {
    return (
      <button onClick={props.onclick} className={s.button1}>
        {content}
      </button>
    );
  } else if (button === "regular") {
    return (
      <button onClick={props.onclick} className={s.button2}>
        {content}
      </button>
    );
  } else if (button === "back") {
    return (
      <div className={s.fullRoute}>
        {route.map((r, i) => {
          return (
            <div key={i} className={s.item}>
              {r.url ? (
                <Link to={r.url}>
                  <span>{r.string}</span>
                </Link>
              ) : (
                <span className={s.noLink}>{r.string}</span>
              )}
              {i < route.length - 1 && <span className={s.split}> / </span>}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Button;
