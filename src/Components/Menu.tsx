import React from "react";
// @ts-ignore
import Navigation from "./Navigation.tsx";
// @ts-ignore
import { MenuContainer, MenuSideWrapper } from "../Styles/Menu.tsx";

const Menu = ({ toggleHamburger, setToggleHamburger }) => {
  return (
    <MenuContainer
      toggleHamburger={toggleHamburger}
      onClick={() => setToggleHamburger(false)}
    >
      <MenuSideWrapper
        onClick={(e) => e.stopPropagation()}
        toggleHamburger={toggleHamburger}
      >
        <Navigation />
      </MenuSideWrapper>
    </MenuContainer>
  );
};

export default Menu;
