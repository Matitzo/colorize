import { Link } from "react-router-dom";
import React from "react";
import styles from "../Styles/Filter.module.css";

export default function GetFiltrHtml({
  handleFilter,
  filter,
  locationPathName,
}) {
  const [value, setValue] = React.useState("");

  function handleClick() {
    handleFilter(value);
  }

  return (
    <form>
      <input
        className={styles.inputIndex}
        id="input"
        placeholder="Select product by id"
        type="text"
        name="filterValue"
        defaultValue={filter}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(e) => setValue(e.target.value ? `${e.target.value}` : "")}
      ></input>

      <Link
        className={styles.filterBtn}
        to={value ? `?id=${value}` : locationPathName}
        onClick={() => handleClick(value)}
      >
        Filter
      </Link>
    </form>
  );
}
