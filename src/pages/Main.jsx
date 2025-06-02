import { React, useState, useRef, useEffect } from "react";
import s from "../styles/main.module.scss";

import Landing from "../components/main/Landing";
import Diensten from "../components/main/Diensten";
import Over from "../components/main/Over";
import Co2 from "../components/main/Co2";
import Projecten from "../components/main/Projecten";
import CCfrank from "../components/main/CCfrank";
import CCvwcon from "../components/main/CCvwcon";

const Main = (props) => {
  const teksten = props.teksten;
  console.log(props);
  return (
    <div className={s.main}>
      <Landing engels={props.english} teksten={teksten} />
      <Diensten engels={props.english} teksten={teksten} />
      <Projecten engels={props.english} teksten={teksten} />
      <Co2 engels={props.english} teksten={teksten} />
      <Over engels={props.english} teksten={teksten} />
      <CCfrank engels={props.english} teksten={teksten} />
      <CCvwcon engels={props.english} teksten={teksten} />
    </div>
  );
};

export default Main;
