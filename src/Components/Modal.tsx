import React from "react";
import {
  StyledModal,
  StyledModalTextPosition,
  StyledModalDiv,
  StyledModalBody,
  StyledModalWindow,
} from "../Styles/Modal.styled";

export default function GetModalHtml({ product, isModal, handleModal }) {
  return (
    <StyledModal
      style={{
        display: `${isModal ? "flex" : "none"}`,
      }}
    >
      <StyledModalWindow>
        <StyledModalDiv
          style={{
            backgroundColor: `${product.color}`,
          }}
        >
          <header>
            <h3>Product informations</h3>
            <span onClick={() => handleModal()}>&times;</span>
          </header>
          <StyledModalBody>
            <StyledModalTextPosition side="right">
              <p>Id:</p>
              <p>Name:</p>
              <p>Year:</p>
              <p>Color:</p>
              <p>Pantone Value:</p>
            </StyledModalTextPosition>
            <StyledModalTextPosition side="left">
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.year}</p>
              <p>{product.color}</p>
              <p>{product.pantone_value}</p>
            </StyledModalTextPosition>
          </StyledModalBody>
        </StyledModalDiv>
      </StyledModalWindow>
    </StyledModal>
  );
}
