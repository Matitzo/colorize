import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNavbar, StyledLi, StyledLink } from "../Styles/Navbar.styled";

export default function Navbar() {
  const location = useLocation();
  return (
    <StyledNavbar>
      <ul>
        <StyledLi underline={location.pathname === "/colorize" && true}>
          <StyledLink to="/colorize">Search our products</StyledLink>
        </StyledLi>
        <StyledLi underline={location.pathname === "/colorize/compare" && true}>
          <StyledLink to="/colorize/compare">Compare colors</StyledLink>
        </StyledLi>
      </ul>
    </StyledNavbar>
  );
}
