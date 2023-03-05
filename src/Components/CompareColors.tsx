import React from "react";
import validateColor from "validate-color";
// @ts-ignore
import EmptyColorsContainer from "./emptyColorsContainer.tsx";
// @ts-ignore
import Colors from "./ColorsContainerColors.tsx";
import { StyledMainCompare } from "../App.styled";
import {
  StyledCompare,
  StyledBtn,
  StyledError,
} from "../Styles/Compare.styled";
import { StyledInput } from "../Styles/Input.styled";

export default function CompareColors({
  colorsArray,
  setColorsArray,
  inputColor,
  setInputColorCode,
}) {
  const [invalidColorMsg, setInvalidColorMsg] = React.useState("");

  function checkColor() {
    return inputColor && validateColor(inputColor) ? true : false;
  }

  function checkLength(prevData) {
    return prevData.length < 5
      ? true
      : setInvalidColorMsg("You can store app to 5 colors");
  }

  function addColor() {
    setInvalidColorMsg("");
    checkColor()
      ? setColorsArray((prevData) =>
          checkLength(prevData) ? [...prevData, inputColor] : prevData
        )
      : setInvalidColorMsg("Invalid color");
    setInputColorCode("");
  }

  function removeColor(indexToDel) {
    setColorsArray((prevData) =>
      prevData.filter((color, index) => index !== indexToDel)
    );
  }

  return (
    <StyledMainCompare>
      <h2>Compare colors</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addColor();
        }}
      >
        <StyledInput
          placeholder="Type color"
          value={inputColor}
          onChange={(e) => setInputColorCode(e.target.value)}
        ></StyledInput>
        <StyledBtn onClick={() => addColor()}>+</StyledBtn>
        {invalidColorMsg && <StyledError>{invalidColorMsg}</StyledError>}
      </form>
      <StyledCompare>
        {colorsArray.length > 0 ? (
          <Colors
            colors={colorsArray}
            removeColor={(value) => removeColor(value)}
          />
        ) : (
          <EmptyColorsContainer />
        )}
      </StyledCompare>
    </StyledMainCompare>
  );
}
