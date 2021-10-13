import React, { useState } from "react";
import "./BearHeader.scss";
import LogoImage from "../../assets/images/logo.png";
import HamburgerIcon from "../../assets/images/hamburger.svg";
import { HashLink as Link } from 'react-router-hash-link';
import MobileMenu from "../MobileMenu/MobileMenu"

export default function BearHeader() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <img src={LogoImage} alt={"logo"} className="header__logo-image" />
        <div className="category-wrapper">
          <Link className="category" smooth to="/#main-screen">
            Buy
          </Link>
          <Link className="category" smooth to="/#road-map">
            Roadmap
          </Link>
          <Link className="category" smooth to="/#connect">
            Connect
          </Link>
          <Link className="category" smooth to="/#rarities">
            Rarities
          </Link>
          <Link className="category" smooth to="/#team">
            Team
          </Link>
          <Link className="category" smooth to="/#faq">
            FAQ
          </Link>
        </div>
        <img
          src={HamburgerIcon}
          alt={"hamburger-icon"}
          className="hamburger"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <MobileMenu menuActive={menuActive} closeMenu={setMenuActive} />
    </header>
  );
}
