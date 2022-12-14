import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import "../assets/css/menuslider.scss";
import { FiGlobe, FiMenu } from "react-icons/fi";
import MenuHeader from "./MenuHeader";
import { BsHeart, BsHeartFill, BsSearch } from "react-icons/bs";
import Menunavs from "./Menunavs";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Auth";

export default function Menuslider() {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();
  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
      >
        <MenuHeader />
      </Box>
      <div className="menu__content">
        <ul className="menu__content__ul">
          <li>
            <Menunavs />
          </li>
          <li
            onClick={() => navigate("/about")}
            style={{ height: "55px", paddingRight: "24px" }}
            className="menu__content__ul__li"
          >
            about us
          </li>
          <li
            onClick={() => navigate("/contact")}
            style={{ height: "55px", paddingRight: "24px" }}
            className="menu__content__ul__li"
          >
            contact
          </li>
        </ul>
        <ul
          onClick={toggleDrawer(anchor, false)}
          className="menu__content__icons"
        >
          <Link className="menu__content__icons__link" to="/search">
            <BsSearch />
          </Link>
          <Link className="menu__content__icons__link" to="/likes">
            {window.location.pathname === "/likes" ? (
              <BsHeartFill />
            ) : (
              <BsHeart />
            )}
          </Link>

          <Link className="menu__content__icons__link">
            <Cart />
          </Link>
          <Link className="menu__content__icons__link">
            <Login />
          </Link>
          <Link className="menu__content__icons__link">
            <FiGlobe />
          </Link>
        </ul>
      </div>
      <div className="menu__footer">© 2022 Ramana castle</div>

      {/* <MenuAccordion /> */}
    </>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FiMenu className="my__menu__icon" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
