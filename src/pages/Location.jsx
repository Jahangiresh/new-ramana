import React from "react";
import contactImg from "../assets/images/locaton.png";
import mapImg from "../assets/images/map.png";

import "../assets/css/location.scss";
const Location = () => {
  return (
    <div className="Location">
      {" "}
      <div className="Location__cover  ">
        <div className="contact__cover__container container">
          <h1>
            our <br /> branches
          </h1>
          <img src={contactImg} alt="" />
        </div>
      </div>
      <div className="Location__content container">
        <h3>store locations</h3>
        <div className="Location__content__row row">
          <div className="Location__content__row__info col-4">
            <h4>contact</h4>
            <span>
              Ünvan <br /> Aşıq Molla Cümə 44, Bakı, Azerbaycan <br />
              <br /> Bizimlə əlaqə <br /> Nömrə : +99412 310 52 04 / 05 <br />
              Telefon: +99455 310 52 04 / 05 <br />
              <br /> E-Poçt adresi <br />
              info@ramana.az <br />
              <br /> İş vaxtları <br /> Həftəiçi : 09:00 - 18:00 Həftəsonu :
              10:00 - 21:00 Sosial mediayada biz:
            </span>
          </div>

          <div className="Location__content__row__map col-8">
            <img src={mapImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
