import React from "react";
import {
  StyledHeaderH1SmallMargin,
  StyledParagraph,
} from "../Styles/Text.styled";

export default function Desc({ heading, text }) {
  return (
    <div>
      <StyledHeaderH1SmallMargin>{heading}</StyledHeaderH1SmallMargin>
      <StyledParagraph>{text}</StyledParagraph>
    </div>
  );
}
