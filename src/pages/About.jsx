import React from "react";
import aboutCover from "../assets/images/about.png";
import aboutBg from "../assets/images/about.png";

import "../assets/css/about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about__cover  ">
        <div className="about__cover__container container">
          <h1>
            about <br /> ramana
          </h1>
          <img src={aboutCover} alt="" />
        </div>
      </div>
      <div className="about__content container">
        <h3>about us</h3>
        <div className="about__content__row row">
          <div className="about__content__row__left col-6 ">
            <p className="about__content__row__left__p">
              the idea and creation of the brand ramana castle
            </p>
          </div>
          <div className="about__content__row__right col-6">
            <p className="about__content__row__right__p">
              There are two stairs for walking up to the tower walls. It is
              possible to walk up by spiral stairs from inner side of the tower
              to a corridor, which was built about 3 metres (10 ft) outside of
              the tower. The other stone stair walks up to the upper side of the
              tower from the garden. By means of these stairs it is possible to
              walk up to the tower walls and look at the village from above.{" "}
              <br /> <br />
              Unlike Mardakan Castle, the natural location of Ramana Castle is
              different; it is on the rocks. The strong tower walls supposedly
              are a natural continuation of rocky slopes. There is an arch in
              the eastern wall of the tower. The strong tower walls supposedly
              are natural continuation.
              <br /> <br /> There is a strong rectangular donjon on the walls of
              the castle like a donjon of the Mardakan Castle. Entrances
              standing opposite to each other have a favourable condition of
              serving for defense. But unlike other towers of Absheron Rayon the
              entrance with spiral stairs of this castle is not at a height, it
              is at the level of ground. There are windows for shooting in all
              walls.There is a strong rectangular donjon on the walls of the
              castle like a donjon of the Mardakan Castle.
              <br /> <br />
              Entrances standing opposite to each other have a favourable
              condition of serving for defense. But unlike other towers of
              Absheron Rayon the entrance with spiral stairs of this castle is
              not at a height, it is at the level of ground. There are windows
              for shooting in all walls.
            </p>
          </div>
        </div>
      </div>
      <div className="about__under__content">
        <div className="about__under__content__container container">
          <div className="about__under__content__container__row row">
            <div className="about__under__content__container__row__left col-6">
              <h3 className="about__under__content__container__row__left__h">
                WHY RAMANA CASTLE
              </h3>
              <p className="about__under__content__container__row__left__p">
                There are two stairs for walking up to the tower walls. It is
                possible to walk up by spiral stairs from inner side of the
                tower to a corridor, which was built about 3 metres (10 ft)
                outside of the tower. The other stone stair walks up to the
                upper side of the tower from the garden. By means of these
                stairs it is possible to walk up to the tower walls and look at
                the village from above. The other stone stair walks up to the
                upper side of the tower from the garden. By means of these
                stairs it is possible to walk up to the tower walls and look at
                the village from above. By means of these stairs it is possible
                to walk up to the tower walls.
              </p>
            </div>
            <div className="about__under__content__container__row__right col-6">
              <p className="about__under__content__container__row__right__p">
                Unlike Mardakan Castle, the natural location of Ramana Castle is
                different; it is on the rocks. The strong tower walls supposedly
                are a natural continuation of rocky slopes. There is an arch in
                the eastern wall of the tower. Unlike Mardakan Castle, the
                natural location of Ramana Castle is different; it is on the
                rocks. The strong tower walls supposedly are a natural
                continuation of rocky slopes. There is an arch in the eastern
                wall of the tower. <br />
                <br />
                There are two stairs for walking up to the tower walls. It is
                possible to walk up by spiral stairs from inner side of the
                tower to a corridor, which was built about 3 metres (10 ft)
                outside of the tower. The other stone stair walks up to the
                upper side of the tower from the garden. By means of these
                stairs it is possible to walk up to the tower walls. By means of
                these stairs it is possible to walk up to the tower walls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
