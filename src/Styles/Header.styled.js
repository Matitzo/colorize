import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0px;
  padding: 1em 3em 3em 3em;
  background-color: #e0aaff;

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

  @media (max-width: 900px) {
    div {
      display: block;

      div {
        width: 100%;
        margin: 0.5em 0;
      }
    }
  }
`;
