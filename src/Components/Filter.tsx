import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import debounce from "lodash.debounce";
import { StyledInput } from "../Styles/Input.styled";

export default function GetFiltrHtml({ filter, locationPathName, setFilter }) {
  const navigate = useNavigate();

  function handleChange(event) {
    navigate(
      `${event.target.value ? `?id=${event.target.value}` : locationPathName}`
    );
    setFilter(event.target.value ? event.target.value : "");
  }

  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), []);

  return (
    <form>
      <StyledInput
        id="input"
        placeholder="Filter product by id"
        type="text"
        name="filterValue"
        defaultValue={filter}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={debouncedChangeHandler}
      ></StyledInput>
    </form>
  );
}
