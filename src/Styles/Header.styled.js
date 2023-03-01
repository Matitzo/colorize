import styled from "styled-components";

export const StyledHeader = styled.header`
  border: 2px solid red;
  margin: 0px;
  padding: 1em;

  div {
    display: flex;

    div {
      display: block;
      width: 50%;
    }

    p {
      margin-top: 1em;
    }
  }
`;
