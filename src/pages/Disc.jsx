import React from "react";
import Button from "../components/Button";
import discProfile from "../images/DISC Frank van Woesik.jpg";
import s from "../styles/singleItemPage.module.scss";

const Disc = (props) => {
  const en = props.english;
  const teksten = props.teksten;
  const route = [
    { string: en ? "Home" : "Thuis", url: en ? "/en/" : "/" },
    { string: en ? "Disc Profile" : "Disc Profiel" },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.containerWrapper}>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.backButton}>
              <Button button={"back"} route={route} content="Terug" />
            </div>
            <img src={discProfile} alt="" />
            <p>{teksten.disc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disc;
