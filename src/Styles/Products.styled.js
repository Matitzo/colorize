import styled from "styled-components";

export const StyledWraper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-bottom: 1em;
  min-height: 460px;
`;

export const StyledArrow = styled.i`
   {
    display: inline-block;
    padding: 1em;
    border: 1px solid white;
    position: relative;
    top: 200px;
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
export const StyledTable = styled.div`
   {
    width: 70%;
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
    height: 50px;
    grid-template-columns: 33% 33% 33%;
    padding: 0.8em 0;
    border-bottom: 1px solid black;
    align-items: center;
  }
`;

export const StyledProduct = styled(StyledTableRow)`
  background-color: ${({ color }) => color};
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

export const StyledSpan = styled.span`
   {
    font-size: 1.3rem;
    background-color: white;
    box-shadow: 0 0 5px black;
    padding: 0.1em 0.4em;
    margin: 0 0.3em;
    border-radius: 5px;
    font-weight: bold;
  }
`;
