import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import "../assets/css/headerLangs.scss";
import { MdLanguage } from "react-icons/md";
const HeaderLangs = () => {
  const { t, i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <NavDropdown title={<MdLanguage className="icon__lang" />}>
      <ul className="icon__lang__ul">
        <li className="icon__lang__ul__li" onClick={() => clickLang("az")}>
          {" "}
          az
        </li>
        <li className="icon__lang__ul__li" onClick={() => clickLang("en")}>
          en
        </li>
        <li className="icon__lang__ul__li" onClick={() => clickLang("tr")}>
          {" "}
          tr
        </li>
      </ul>
    </NavDropdown>
  );
};

export default HeaderLangs;
