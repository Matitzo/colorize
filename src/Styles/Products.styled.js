import styled from "styled-components";

export const StyledWraper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-bottom: 1em;
  min-height: 460px;

  @media (max-width: 900px) {
    margin-bottom: 2em;
    min-height: 500px;
  }
`;

export const StyledArrow = styled.i`
   {
    display: inline-block;
    padding: 1em;
    position: relative;
    top: 200px;
    z-index: 1;
    border: 1px solid #fff;
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

    @media (max-width: 900px) {
      position: absolute;
      left: ${({ left }) => (left ? "calc(50% - 68px)" : "calc(50% + 18px)")};
      top: 962px;
      i {
        width: 15px;
        height: 15px;
      }

      &:hover,
      &:focus {
        border: none;
      }
    }

    @media (max-width: 570px) {
      top: 927px;
    }

    @media (max-width: 499px) {
      top: 952px;
    }
  }
`;
export const StyledTable = styled.div`
   {
    width: 60%;
    margin: 0 2em;
    background-color: rgb(230, 242, 252);
    border: 4px solid black;
    border-radius: 25px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);

    div:last-child {
      border-radius: 0 0 20px 20px;
    }
    
    @media (max-width: 900px) {
      margin: 0 auto;
      width: 100%;
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

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    padding: 0.2em 0;
    height: 75px;
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
