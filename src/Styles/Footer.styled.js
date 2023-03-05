import styled from "styled-components";

export const StyledFooter = styled.footer`
   {
    padding: 3em;
    background-color: #e0aaff;
  }

  p {
    text-align: end;
  }

  @media (max-width: 900px) {
  }
`;

export const StyledFooterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;

  ul {
    flex-grow: 1;
    max-width: 300px;
    margin: 0.5em 0.2em;
    list-style-type: none;
  }

  li {
    margin-bottom: 1em;
  }

  @media (max-width: 900px) {
    ul {
    }
  }
`;
