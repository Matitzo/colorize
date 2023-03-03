import React from "react";
import { Link } from "react-router-dom";
import { StyledArrow } from "../Styles/Products.styled";

export default function Arrow({
  currentPage,
  pageNumber,
  onPageChange,
  leftArrow,
}) {
  return (
    <Link
      style={{
        visibility: `${currentPage === pageNumber ? "hidden" : "visible"}`,
        textDecoration: "none",
        height: "fit-content",
      }}
      to={`?page=${
        leftArrow
          ? currentPage - 1
          : currentPage + 1 < pageNumber
          ? currentPage + 1
          : pageNumber
      }`}
      onClick={() =>
        onPageChange(leftArrow ? currentPage - 1 : currentPage + 1)
      }
    >
      <StyledArrow left={leftArrow}>
        <i></i>
      </StyledArrow>
    </Link>
  );
}
