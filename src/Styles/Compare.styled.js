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
  }
`;

export const StyledBtn = styled.div`
   {
    margin-left: 1em;
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid black;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
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
    flex-direction: column;
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

    @media (max-width: 900px) {
      border-radius: 0;

      &:first-child {
        border-radius: 20px 20px 0 0;
      }
      &:last-child {
      border-top-right-radius: 0px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
  }
`;

export const StyledError = styled.p`
   {
    margin: 0;
    font-size: 0.9rem;
    color: red;
    position: relative;
    top: -10px;
    left: -25px;
  }
`;

export const StyledFontAwesomeXMark = styled(FontAwesomeIcon)`
   {
    &:hover {
      cursor: pointer;
    }
  }
`;
