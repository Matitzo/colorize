import React from "react";
// @ts-ignore
import {
  HamburgerButton,
  HamburgerBar1,
  HamburgerBar2,
  HamburgerBar3,
} from "../Styles/Hamburger.tsx";

export default function Hamburger({ toggleHamburger, setToggleHamburger }) {
  function handleToggle() {
    setToggleHamburger((prevData) => !prevData);
  }

  return (
    <HamburgerButton onClick={() => handleToggle()}>
      <HamburgerBar1 toggleHamburger={toggleHamburger}></HamburgerBar1>
      <HamburgerBar2 toggleHamburger={toggleHamburger}></HamburgerBar2>
      <HamburgerBar3 toggleHamburger={toggleHamburger}></HamburgerBar3>
    </HamburgerButton>
  );
}
