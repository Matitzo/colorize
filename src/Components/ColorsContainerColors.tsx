import React from "react";

import {
  StyledColorsContainer,
  StyledColorDiv,
} from "../Styles/Compare.styled";

export default function Colors({ colors }) {
  return (
    <StyledColorsContainer>
      {colors.map((color) => (
        <StyledColorDiv color={color}>
          <p>{color}</p>
        </StyledColorDiv>
      ))}
    </StyledColorsContainer>
  );
}
