import { Link } from "react-router-dom";
import styles from "../Styles/Pagination.module.css";

export default function GetPaginationHtml({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className={styles.paginationWraper}>
      <Link
        to={`?page=${currentPage - 1}`}
        onClick={() => onPageChange(currentPage - 1)}
        className={currentPage === 1 ? styles.invisible : ""}
      >
        <span>
          <i className={`${styles.arrow} ${styles.left}`}></i>
        </span>
      </Link>

      <span className={styles.paginationPageNumber}>{currentPage}</span>

      <Link
        to={`?page=${currentPage + 1}`}
        onClick={() => onPageChange(currentPage + 1)}
        className={currentPage === totalPages ? styles.invisible : ""}
      >
        <span>
          <i className={`${styles.arrow} ${styles.right}`}></i>
        </span>
      </Link>
    </div>
  );
}
