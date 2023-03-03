import styled from "styled-components";

export const StyledModal = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  justify-content: center;
`;

export const StyledModalWindow = styled.div`
  margin: 0 auto;
  width: 350px;

  header {
    display: flex;
    justify-content: center;
  }

  span {
    color: black;
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: relative;
    top: -18px;
    left: 57px;
  }

  span:hover,
  span:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledModalTextPosition = styled.div`
  text-align: ${({ side }) => (side === "right" ? "right" : "left")};
  font-weight: ${({ side }) => side === "right" && "bold"};
  width: 50%;
  margin: 0 5px;
`;

export const StyledModalDiv = styled.div`
  padding: 1.2em 0;
  border-radius: 25px;
`;

export const StyledModalBody = styled.main`
  display: flex;
`;
