import React from "react";
// @ts-ignore
import Arrow from "./Arrow.tsx";
import {
  StyledWraper,
  StyledTable,
  StyledTableRow,
  StyledProduct,
  StyledSpan,
} from "../Styles/Products.styled";

export default function GetProductsHtml({
  products,
  setModal,
  setModalProduct,
  currentPage,
  totalPages,
  onPageChange,
}) {
  function viewModalProduct(product) {
    setModal((prevData) => !prevData);
    setModalProduct(product);
  }

  return (
    <>
      <StyledWraper>
        <Arrow
          currentPage={currentPage}
          pageNumber={1}
          onPageChange={onPageChange}
          leftArrow={true}
        />
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
        <Arrow
          currentPage={currentPage}
          pageNumber={totalPages}
          onPageChange={onPageChange}
          leftArrow={false}
        />
      </StyledWraper>
      <StyledSpan>{currentPage}</StyledSpan>
    </>
  );
}
