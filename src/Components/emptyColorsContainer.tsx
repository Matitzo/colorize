import React from "react";
import {
  StyledEmptyContainer,
  StyledEmptyContainerWrapper,
} from "../Styles/Compare.styled";

export default function EmptyColorsContainer() {
  return (
    <StyledEmptyContainerWrapper>
      <StyledEmptyContainer>
        <h3>Add some colors</h3>
      </StyledEmptyContainer>
    </StyledEmptyContainerWrapper>
  );
}
