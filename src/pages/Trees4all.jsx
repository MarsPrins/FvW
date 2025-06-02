import React from "react";
import boom from "../images/vitens pinkenberg.jpg";
import certificaat from "../images/Certificaat_Trees_for_All_8941c7d4-page-001.jpg";
import s from "../styles/singleItemPage.module.scss";
import Button from "../components/Button";

// ff heading en bedenk iets anders met die boom foto
// klein textje kan er wel bij, die van de homepagina

const Trees4all = (props) => {
  const en = props.english;

  const route = [
    { string: en ? "Home" : "Thuis", url: en ? "/en/" : "/" },
    { string: en ? "Certificate" : "Certificaat" },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <div className={s.fixedImage}>
          <img src={boom} alt="" />
        </div>
      </div>
      <div className={s.containerWrapper}>
        <div className={s.containerTrees}>
          <div className={s.content}>
            <div className={s.backButton}>
              <Button button={"back"} route={route} content="Terug" />
            </div>
            <img src={certificaat} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trees4all;
