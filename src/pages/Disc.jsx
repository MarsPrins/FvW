import React from "react";
import Button from "../components/Button";
import discProfile from "../images/DISC Frank van Woesik.jpg";
import s from "../styles/singleItemPage.module.scss";

const Disc = () => {
  const route = [{ string: "Thuis", url: "/" }, { string: "Disc Profiel" }];
  return (
    <div className={s.wrapper}>
      <div className={s.containerWrapper}>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.backButton}>
              <Button button={"back"} route={route} content="Terug" />
            </div>
            <img src={discProfile} alt="" />
            <p>
              Je hebt een sterke zelfmotivatie om doelen te stellen en te
              bereiken. Je bent overtuigend, mensgericht en vastbesloten. Je
              gaat goed om met druk; tegenstand of kritiek zullen je niet snel
              demotiveren. Je bent in staat om langere tijd repetitief
              routinewerk te doen, maar dat verveelt je meestal wel. Je kunt
              tamelijk ongeduldig of gefrustreerd raken door mensen die minder
              zelfmotivatie en dynamiek hebben dan jij. Maar je optimisme en
              enthousiasme voor het leggen van contact met mensen geeft hier
              tegenwicht aan. Je kunt daardoor met veel verschillende mensen
              omgaan en werken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disc;
