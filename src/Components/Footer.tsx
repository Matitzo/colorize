import React from "react";
// @ts-ignore
import SocialIcons from "./SocialIcons.tsx";
import { StyledFooter, StyledFooterFlex } from "../Styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="logo"></div>

      <StyledFooterFlex>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+1-543-123-4567</li>
          <li>example@colorize.com</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <SocialIcons />
      </StyledFooterFlex>

      <p>&copy; 2023 Colorize. All rights reserved</p>
    </StyledFooter>
  );
}
