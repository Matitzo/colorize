import React from "react";
import { StyledHeader } from "../Styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo"></div>
      <div>
        <div>
          <h1>Find your color!</h1>
          <p>
            Looking to add some color to your home or office? Look no further
            than our website! We offer a wide variety of high-quality paints in
            every shade you can imagine. From bold and bright to soft and
            subtle, we have the perfect color for every space. Our user-friendly
            website makes it easy to browse and choose your favorite paint
            products.
          </p>
        </div>
        <div className="image-1"></div>
      </div>
    </StyledHeader>
  );
}
