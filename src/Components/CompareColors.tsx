import React from "react";
// @ts-ignore
import EmptyColorsContainer from "./emptyColorsContainer.tsx";
// @ts-ignore
import Colors from "./ColorsContainerColors.tsx";
import { StyledMain } from "../App.styled";
import { StyledCompare, StyledBtn } from "../Styles/Compare.styled";
import { StyledInput } from "../Styles/Input.styled";

export default function CompareColors({
  colorsArray,
  setColorsArray,
  inputColorCode,
  setInputColorCode,
}) {
  function addColor() {
    setColorsArray((prevData) => [...prevData, inputColorCode]);
    setInputColorCode("");
  }

  return (
    <StyledMain>
      <h2>Compare colors</h2>
      <form>
        <StyledInput
          placeholder="Type color code"
          value={inputColorCode}
          onChange={(e) => setInputColorCode(e.target.value)}
        ></StyledInput>
        <StyledBtn onClick={() => addColor()}>+</StyledBtn>
      </form>
      <StyledCompare>
        {colorsArray.length > 0 ? (
          <Colors colors={colorsArray} />
        ) : (
          <EmptyColorsContainer />
        )}
      </StyledCompare>
    </StyledMain>
  );
}
