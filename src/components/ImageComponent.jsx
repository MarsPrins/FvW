import React, { useEffect, useState } from "react";
import loadingImage from "../images/grey.jpg";
import s from "../styles/projectPage.module.scss";

const ImageComponent = (props) => {
  const loadImg = props.loadImgSrc;
  const src = props.src;
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    if (!src) console.log("image not found");

    const img = new Image();

    img.onload = () => {
      setImgLoaded(true);
    };

    img.onerror = (err) => {
      console.error("Image failed to load", err);
    };

    img.src = src;

    // Optional cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <>
      {!imgLoaded && loadImg && <img src={loadImg} alt="" />}
      {!imgLoaded && !loadImg && (
        <img className={s.loadingImage} src={loadingImage} alt="" />
      )}
      {imgLoaded && <img src={src} alt="" />}
    </>
  );
};

export default ImageComponent;
