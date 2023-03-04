import React from "react";
import {
  StyledColorsContainer,
  StyledColorDiv,
} from "../Styles/Compare.styled";
import { StyledFontAwesomeXMark } from "../Styles/Compare.styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";

library.add(faXmark);

export default function Colors({ colors, removeColor }) {
  return (
    <StyledColorsContainer>
      {colors.map((color, index) => (
        <StyledColorDiv key={index} color={color}>
          <div>
            <span>{color}</span>
            <StyledFontAwesomeXMark
              onClick={(e) => {
                removeColor(index);
              }}
              icon={"fa-solid fa-xmark" as IconProp}
            />
          </div>
        </StyledColorDiv>
      ))}
    </StyledColorsContainer>
  );
}
