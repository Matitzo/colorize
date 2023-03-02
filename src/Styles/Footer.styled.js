import styled from "styled-components";

export const StyledFooter = styled.footer`
   {
    padding: 3em;
    background-color: #e0aaff;
  }

  p {
    text-align: end;
  }
`;

export const StyledFooterFlex = styled.div`
  display: flex;

  ul {
    max-width: 300px;
    margin: 0 2em;
    list-style-type: none;
  }

  li {
    margin-bottom: 1em;
  }
`;
