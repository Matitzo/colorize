import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 2;
  top: 0;
  background-color: #ff006e;
  color: white;
  padding: 0 2em;
  font-weight: bold;

  ul {
    display: flex;
    align-items: center;
    height: 50px;
  }
`;

export const StyledLi = styled.li`
   {
    margin: 0 1em;
    list-style: none;
    border-bottom: ${({ underline }) => underline && "3px solid white"};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
   {
    text-decoration: none;
    color: white;
  }
`;
