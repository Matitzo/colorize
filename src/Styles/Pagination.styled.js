import styled from "styled-components";

export const StyledPaginationDiv = styled.div`
  margin: 0 auto;
  margin-top: 1em;

  span {
    background-color: white;
    box-shadow: 0 0 5px black;
    padding: 0.1em 0.4em;
    margin: 0 0.3em;
    border-radius: 5px;
    font-weight: bold;
  }
`;

export const StyledArrow = styled.i`
   {
    font-size: 30px;
    color: black;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
