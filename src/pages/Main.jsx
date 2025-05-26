import { React, useState, useRef, useEffect } from "react";
import s from "../styles/main.module.scss";
import teksten from "../teksten.json";

import Landing from "../components/main/Landing";
import Diensten from "../components/main/Diensten";
import Over from "../components/main/Over";
import Co2 from "../components/main/Co2";
import Projecten from "../components/main/Projecten";
import CCfrank from "../components/main/CCfrank";
import CCvwcon from "../components/main/CCvwcon";

const Main = () => {
  return (
    <div className={s.main}>
      <Landing teksten={teksten} />
      <Diensten teksten={teksten} />
      <Projecten teksten={teksten} />
      <Co2 teksten={teksten} />
      <Over teksten={teksten} />
      <CCfrank teksten={teksten} />
      <CCvwcon teksten={teksten} />
    </div>
  );
};

export default Main;
