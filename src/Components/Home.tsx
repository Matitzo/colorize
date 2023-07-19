import React from "react";
import {
  StyledHeaderH1,
  StyledParagraph,
  StyledParagraphNoMargin,
} from "../Styles/Text.styled";
import {
  StyledHomeContainerDiv,
  StyledImgContainer1,
  StyledImgContainer2,
  StyledImgContainer3,
  StyledHomeIntroContainerDiv,
  StyledLindButton,
  StyledHomeBottomContainerDiv,
  StyledHomeFlexWrapperDiv,
  StyledHomeFlexImgWrapperDiv,
  StyledHomeBoxContainerDiv,
  StyledHomeBoxTextWrapper,
  StyledHomeBoxHeader3Wrapper,
} from "../Styles/Home.styled";

export default function Home() {
  return (
    <StyledHomeContainerDiv>
      <StyledHomeFlexWrapperDiv>
        <StyledHomeIntroContainerDiv>
          <StyledHeaderH1>Find your color!</StyledHeaderH1>
          <StyledParagraph>
            Looking to add some color to your home or office? Look no further
            than our website! We offer a wide variety of high-quality paints in
            every shade you can imagine. From bold and bright to soft and
            subtle, we have the perfect color for every space. Our user-friendly
            website makes it easy to browse and choose your favorite paint
            products.
          </StyledParagraph>
          <StyledLindButton to="/colorize/products">
            <span>Browse our collection</span>
          </StyledLindButton>
        </StyledHomeIntroContainerDiv>
        <StyledHomeFlexImgWrapperDiv>
          <StyledImgContainer1>
            <div>
              <p>
                <b>Compare</b> colors and choose your <b>favorite</b>!
              </p>
            </div>
          </StyledImgContainer1>
          <StyledImgContainer2>
            <div>
              <p>
                <b>Choose</b> from <b>256</b> colors!
              </p>
            </div>
          </StyledImgContainer2>
        </StyledHomeFlexImgWrapperDiv>
      </StyledHomeFlexWrapperDiv>
      <StyledHomeBottomContainerDiv>
        <StyledHomeBoxContainerDiv>
          <StyledHomeBoxHeader3Wrapper>
            <h3>10K</h3>
          </StyledHomeBoxHeader3Wrapper>
          <StyledHomeBoxTextWrapper>
            <StyledParagraphNoMargin>
              We are proud to announce that we now employ a wokrforce of over
              <b> 10,000</b>. It’s all possible beacouse of you.
            </StyledParagraphNoMargin>
          </StyledHomeBoxTextWrapper>
        </StyledHomeBoxContainerDiv>
        <StyledHomeFlexImgWrapperDiv>
          <StyledImgContainer3></StyledImgContainer3>
        </StyledHomeFlexImgWrapperDiv>
      </StyledHomeBottomContainerDiv>
    </StyledHomeContainerDiv>
  );
}
