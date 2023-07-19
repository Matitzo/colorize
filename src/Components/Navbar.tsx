import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNavbar, StyledLi, StyledLink } from "../Styles/Navbar.styled";

export default function Navbar() {
  const location = useLocation();
  return (
    <StyledNavbar>
      <StyledLink to="/colorize">
        <div className="logo"></div>
      </StyledLink>

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
        <StyledLi
          underline={location.pathname === "/colorize/products" && true}
        >
          <StyledLink to="/colorize/products">Products</StyledLink>
        </StyledLi>
        <StyledLi underline={location.pathname === "/colorize/compare" && true}>
          <StyledLink to="/colorize/compare">Compare colors</StyledLink>
        </StyledLi>
      </ul>
    </StyledNavbar>
  );
}
