import styled from "styled-components";

export const StyledTable = styled.div`
   {
    margin: 0 auto;
    width: 50%;
    background-color: rgb(230, 242, 252);
    border: 4px solid black;
    border-radius: 25px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

    div:last-child {
      border-radius: 0 0 20px 20px;
    }
  }
`;

export const StyledTableRow = styled.div`
   {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 0.8em 0;
    border-bottom: 1px solid black;
    align-items: center;
  }
`;

export const StyledProduct = styled(StyledTableRow)`
  background-color: ${({ color }) => color};
  height: 50px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;
