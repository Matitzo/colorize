import styled from "styled-components";

export const StyledMain = styled.main`
   {
    min-width: 250px;
    width: 100%;
    text-align: center;
    padding: 1em;
    min-height: 600px;
    margin-bottom: 3em;
    padding-bottom: 3em;

    @media (max-width: 900px) {
      height: 750px;
    }
  }
`;

export const StyledMainCompare = styled.main`
   {
    min-width: 250px;
    text-align: center;
    margin-bottom: 3em;
    padding: 1em;
    min-height: 600px;
    padding-bottom: 3em;
    width: 100%;

    @media (max-width: 900px) {
      height: 420px;
      padding-bottom: 3em;
    }
  }
`;
