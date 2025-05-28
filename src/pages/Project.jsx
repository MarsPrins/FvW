import React from "react";
import { useParams } from "react-router-dom";
import s from "../styles/projectPage.module.scss";
import { imageContexts, importAllImages } from "../utils/loadImages";
import Button from "../components/Button";

const Project = () => {
  const { slug } = useParams();
  const context = imageContexts[slug];
  const images = importAllImages(context);
  const route = [{ string: "Thuis", url: "/#projecten" }, { string: slug }];

  console.log(context);
  console.log(images);

  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.heading}>
          <h1>{slug}</h1>
          <div className={s.graphic}></div>
        </div>
        <div className={s.backButton}>
          <Button button={"back"} route={route} content="Terug" />
        </div>
        <div className={s.photos}>
          {images.map((img, i) => {
            return (
              <div key={img} className={s.photo}>
                <img src={img.src} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
