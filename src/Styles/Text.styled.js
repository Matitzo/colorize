import styled from "styled-components";

export const StyledHeaderH1 = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1.2em;
  font-family: "Nanum Myeongjo", serif;
`;

export const StyledHeaderH1SmallMargin = styled(StyledHeaderH1)`
  margin-bottom: 0.5em;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 2.5em;
  line-height: 155%;
  font-size: 1.25rem;
`;

export const StyledParagraphNoMargin = styled(StyledParagraph)`
  margin: 0;
`;