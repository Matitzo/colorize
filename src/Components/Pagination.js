import { Link } from "react-router-dom";

export default function GetPaginationHtml({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="pagination">
      <Link to={`/?page=${currentPage - 1}`}>
        <span
          className={
            currentPage === 1
              ? "pagination-arrow invisible"
              : "pagination-arrow"
          }
          onClick={() => onPageChange(currentPage - 1)}
        >
          <i className="arrow left"></i>
        </span>
      </Link>

      <span className="pagination-pageNumber">{currentPage}</span>
      <Link to={`/?page=${currentPage + 1}`}>
        <span
          className={
            currentPage === totalPages
              ? "pagination-arrow invisible"
              : "pagination-arrow "
          }
          onClick={() => onPageChange(currentPage + 1)}
        >
          <i className="arrow right"></i>
        </span>
      </Link>
    </div>
  );
}
