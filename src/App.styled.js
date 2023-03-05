import styled from "styled-components";

export const StyledMain = styled.main`
   {
    min-width: 250px;
    text-align: center;
    margin: 3em;
    padding: 1em;
    height: 600px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 900px) {
      height: 750px;
    }
  }
`;

export const StyledMainCompare = styled.main`
   {
    min-width: 250px;
    text-align: center;
    margin: 3em;
    padding: 1em;
    height: 600px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 900px) {
      height: 420px;
      padding-bottom: 3em;
    }
  }
`;
