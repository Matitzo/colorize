import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  background-color: white;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5em;
  margin-bottom: 6em;

  ul {
    display: flex;
    align-items: center;
  }
`;

export const StyledLi = styled.li`
   {
    margin: 0 1em;
    list-style: none;
    border-bottom: ${({ underline }) => underline && "3px solid black"};
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
   {
    text-decoration: none;
    color: black;
  }
`;
