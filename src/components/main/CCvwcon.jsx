import React from "react";
import s from "../../styles/main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const CCvwcon = (props) => {
  const teksten = props.teksten;
  const vwcon = teksten["contact-vwcon"];
  return (
    <div className={s.contactBedrijf}>
      <div className={s.container}>
        <div className={s.heading}>
          <div className={s.title}>
            <div className={s.graphic}></div>
            <h2>{vwcon.titel}</h2>
          </div>
          <p>{vwcon.beschrijving}</p>
        </div>
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.container}>
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={s.title}>{vwcon.blokken.deel1.titel}</div>
                <div className={s.contentSection}>
                  {vwcon.blokken.deel1.inhoud.map((item, i) => {
                    return (
                      <div>
                        {item}
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={s.title}>{vwcon.blokken.deel2.titel}</div>
                <div className={s.contentSection}>
                  {vwcon.blokken.deel2.inhoud.map((item, i) => {
                    return (
                      <div>
                        {item}
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className={s.title}>{vwcon.blokken.deel3.titel} </div>
                <div className={s.contentSection}>
                  {vwcon.blokken.deel3.inhoud.map((item, i) => {
                    return (
                      <div>
                        {item}
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className={s.item}>
                  <div className={s.icon}>
                    <FontAwesomeIcon icon={faHandshake} />
                  </div>
                  <div className={s.title}>Woesik Consult België B.V. </div>
                  <div className={s.contentSection}>
                    Ondernemingsnr: 1234.567.890 <br />
                    BTW: BE 1234.567.890 <br />
                    Hoofdweg 2, 3842 GZ Harderwijk
                  </div>
                </div> */}
            </div>
          </div>
          {/* rid of view larger map on mobile or do sum with touch */}
          <div className={s.map}>
            <iframe
              src={vwcon["map-embed-url"]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCvwcon;
