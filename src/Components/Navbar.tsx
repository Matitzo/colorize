import React from "react";
import { useState, useEffect } from "react";
import { StyledNavbar, StyledLink } from "../Styles/Navbar.styled";
// @ts-ignore
import Navigation from "./Navigation.tsx";
// @ts-ignore
import Hamburger from "./Hamburger.tsx";

export default function Navbar({ toggleHamburger, setToggleHamburger }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      window.innerWidth > 580 && setToggleHamburger(false);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <StyledNavbar>
      <StyledLink to="/colorize">
        <div className="logo"></div>
      </StyledLink>
      {windowWidth >= 580 ? (
        <Navigation />
      ) : (
        <Hamburger
          toggleHamburger={toggleHamburger}
          setToggleHamburger={(value) => setToggleHamburger(value)}
        />
      )}
    </StyledNavbar>
  );
}
