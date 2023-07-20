import styled from "styled-components";

export const StyledAppWrapper = styled.div``;

export const StyledMain = styled.main`
   {
    min-width: 250px;
    width: 100%;
    text-align: center;
    min-height: 600px;
    margin-bottom: 3em;
    padding-bottom: 3em;
  }
`;

export const StyledMainCompare = styled.main`
   {
    text-align: center;
    margin-bottom: 3em;
    min-height: 600px;
    padding-bottom: 3em;
    width: 100%;

    @media (max-width: 900px) {
      min-width: 350px;
    }
    @media (max-width: 570px) {
      min-width: 200px;
    }
  }
`;
