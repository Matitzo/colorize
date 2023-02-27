import React from "react";
import { StyledModal } from "../Styles/Modal.styled";
// @ts-ignore
import styles from "../Styles/Modal.module.css";

export default function GetModalHtml({ product, isModal, handleModal }) {
  return (
    <StyledModal
      style={{
        display: `${isModal ? "flex" : "none"}`,
      }}
    >
      <div
        style={{
          backgroundColor: `${product.color}`,
        }}
      >
        <h3>Product informations</h3>
        <span onClick={() => handleModal()}>&times;</span>
        <div>
          <div>
            <p>Id:</p>
            <p>Name:</p>
            <p>Year:</p>
            <p>Color:</p>
            <p>Pantone Value:</p>
          </div>
          <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.year}</p>
            <p>{product.color}</p>
            <p>{product.pantone_value}</p>
          </div>
        </div>
      </div>
    </StyledModal>
  );
}
