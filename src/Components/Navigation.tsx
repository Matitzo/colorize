import React from "react";
import { useLocation } from "react-router-dom";
import { StyledLi, StyledLink } from "../Styles/Navbar.styled";

export default function Navigation() {
  const location = useLocation();
  return (
    <ul>
      <StyledLi
        underline={
          location.pathname !== "/colorize/products" &&
          location.pathname !== "/colorize/compare" &&
          true
        }
      >
        <StyledLink to="/colorize">Home</StyledLink>
      </StyledLi>
      <StyledLi underline={location.pathname === "/colorize/products" && true}>
        <StyledLink to="/colorize/products">Products</StyledLink>
      </StyledLi>
      <StyledLi underline={location.pathname === "/colorize/compare" && true}>
        <StyledLink to="/colorize/compare">Compare colors</StyledLink>
      </StyledLi>
    </ul>
  );
}
