import styled from "styled-components";

export const StyledCompare = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 80%;
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

export const StyledEmptyContainer = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    border: 4px dashed gray;
    border-radius: 25px;
  }
`;

export const StyledColorsContainer = styled.div`
   {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export const StyledColorDiv = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background-color: ${({ color }) => color};
    flex-grow: 1;
    

    &:first-child {
      border-radius: 20px 0 0 20px;
    }
    
    &:last-child {
        border-radius: 0 20px 20px 0;
      }
`;
