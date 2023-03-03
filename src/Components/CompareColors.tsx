import React from "react";
import validateColor from "validate-color";
// @ts-ignore
import EmptyColorsContainer from "./emptyColorsContainer.tsx";
// @ts-ignore
import Colors from "./ColorsContainerColors.tsx";
import { StyledMain } from "../App.styled";
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

  // function setErrorMsg(prevData) {
  //   return prevData.length < 5 ? true : false
  //   prevData.length === 5 &&
  //     setInvalidColorMsg("");
  // }

  function addColor() {
    setInvalidColorMsg("");
    checkColor()
      ? setColorsArray((prevData) =>
          prevData.length < 5 ? [...prevData, inputColor] : prevData
        )
      : setInvalidColorMsg(
          colorsArray.length === 5
            ? "You can store app to 5 colors"
            : "Invalid color"
        );
    setInputColorCode("");
  }

  return (
    <StyledMain>
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
          <Colors colors={colorsArray} />
        ) : (
          <EmptyColorsContainer />
        )}
      </StyledCompare>
    </StyledMain>
  );
}
