import React from "react";
import { Link } from "react-router-dom";
import { StyledPaginationDiv, StyledArrow } from "../Styles/Pagination.styled";

export default function GetPaginationHtml({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <StyledPaginationDiv>
      <Link
        style={{
          visibility: `${currentPage === 1 ? "hidden" : "visible"}`,
          textDecoration: "none",
        }}
        to={`?page=${currentPage - 1}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <StyledArrow>&#8249;</StyledArrow>
      </Link>

      <span>{currentPage}</span>

      <Link
        style={{
          visibility: `${currentPage === totalPages ? "hidden" : "visible"}`,
          textDecoration: "none",
        }}
        to={`?page=${currentPage + 1}`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <StyledArrow>&#8250;</StyledArrow>
      </Link>
    </StyledPaginationDiv>
  );
}
