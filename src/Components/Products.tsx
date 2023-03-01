import React from "react";
import {
  StyledTable,
  StyledTableRow,
  StyledProduct,
} from "../Styles/Products.styled";
// @ts-ignore
import styles from "../Styles/Products.module.css";

export default function GetProductsHtml({
  products,
  setModal,
  setModalProduct,
}) {
  function viewModalProduct(product) {
    setModal((prevData) => !prevData);
    setModalProduct(product);
  }

  return (
    <StyledTable>
      <StyledTableRow>
        <h4>Id</h4>
        <h4>Name</h4>
        <h4>Year</h4>
      </StyledTableRow>
      {products.map((product) => (
        <StyledProduct
          color={product.color}
          onClick={() => viewModalProduct(product)}
        >
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.year}</p>
        </StyledProduct>
      ))}
    </StyledTable>
  );
}
