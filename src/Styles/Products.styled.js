import styled from "styled-components";

export const StyledWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

export const StyledTable = styled.div`
   {
    width: 50%;
    margin: 0 2em;
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

export const StyledArrow = styled.i`
   {
    display: inline-block;
    padding: 1em;
    border: 1px solid white;
    i {
      position: relative;
      left: ${({ left }) => (left ? "10px" : "-10px")};
      width: 30px;
      height: 30px;
      transition: 0.5s;
      float: left;
      box-shadow: -3px 3px 0 #2b2d42;
      transform: ${({ left }) => (left ? "rotate(45deg)" : "rotate(-135deg)")};
    }

    &:hover,
    &:focus {
      border: 1px solid #9a8c98;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const StyledSpan = styled.span`
   {
    background-color: white;
    box-shadow: 0 0 5px black;
    padding: 0.1em 0.4em;
    margin: 0 0.3em;
    border-radius: 5px;
    font-weight: bold;
  }
`;
