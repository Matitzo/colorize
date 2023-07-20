import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledCompare = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    margin: 0 auto;
    border: 4px solid black;
    border-radius: 25px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 900px) {
      width: 90%;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5em;
`;

export const StyledBtn = styled.div`
   {
    margin-left: 1em;
    padding: 8px;
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 2rem;
    line-height: 1.2rem;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid grey;
    color: grey;
  }
`;

export const StyledEmptyContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1em;
`;

export const StyledEmptyContainer = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 400px;
    border: 4px dashed gray;
    border-radius: 25px;
  }

  h3 {
    margin: 0;
  }
`;

export const StyledColorsContainer = styled.div`
   {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: calc(400px + 2em + 8px);
  }

  @media (max-width: 900px) {
  }
`;

export const StyledColorDiv = styled.div`
   {
    min-height: calc(400px + 2em + 8px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: ${({ color }) => color};
    flex-grow: 1;

    div {
      font-size: 1em;
      margin-top: 1em;
      font-weight: bold;
      padding: 0.2em 0.7em;
      border-radius: 8px;
      background-color: whitesmoke;

      span {
        margin-right: 0.3em;
      }
    }

    &:first-child {
      border-radius: 20px 0 0 20px;
    }

    &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

`;

export const StyledError = styled.p`
   {
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
    color: red;
    margin-bottom: 1.3em;
  }
`;

export const StyledFontAwesomeXMark = styled(FontAwesomeIcon)`
   {
    &:hover {
      cursor: pointer;
    }
  }
`;
