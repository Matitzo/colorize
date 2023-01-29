import { Link, useSubmit, Form } from "react-router-dom";
import React from "react";

export default function GetFiltrHtml({ handleFilter, filter }) {
  const [value, setValue] = React.useState("");

  function handleClick() {
    handleFilter(value);
  }

  return (
    <form>
      <input
        id="input"
        placeholder="Select by id"
        type="text"
        name="filterValue"
        defaultValue={filter.substring(1)}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        min={1}
      ></input>

      <Link to={`/${value}`} onClick={() => handleClick()}>
        Filter
      </Link>
    </form>
  );
}
