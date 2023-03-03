import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNavbar, StyledLi, StyledLink } from "../Styles/Navbar.styled";

export default function Navbar() {
  const location = useLocation();
  return (
    <StyledNavbar>
      <ul>
        <StyledLi underline={location.pathname === "/Internship-app-1" && true}>
          <StyledLink to="/Internship-app-1">Search our products</StyledLink>
        </StyledLi>
        <StyledLi
          underline={location.pathname === "/Internship-app-1/compare" && true}
        >
          <StyledLink to="/Internship-app-1/compare">Compare colors</StyledLink>
        </StyledLi>
      </ul>
    </StyledNavbar>
  );
}
