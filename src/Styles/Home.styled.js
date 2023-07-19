import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../images/legs-on-colorfull-floor.jpg";
import img2 from "../images/paint-on-wall.jpg";
import img3 from "../images/paint.jpg";

export const StyledHomeContainerDiv = styled.div`
  margin-bottom: 3em;
`;

export const StyledHomeFlexWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const StyledHomeFlexImgWrapperDiv = styled(StyledHomeFlexWrapperDiv)`
  width: calc(50% - 16px);
  margin: 0;
`;

export const StyledHomeIntroContainerDiv = styled.div`
  width: calc(50% - 16px);
  height: 500px;
`;

export const StyledImgContainer = styled.div`
  width: calc(50% - 16px);
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: end;

  div {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 6px;
    border: 1px solid black;
    background-color: white;
    padding: 0.5em 0.8em;
    margin: 0.8em;
    width: calc(100% - 1.6em);
    min-height: 50px;
  }
`;

export const StyledImgContainer1 = styled(StyledImgContainer)`
  background-image: url(${img1});
`;

export const StyledImgContainer2 = styled(StyledImgContainer)`
  background-image: url(${img2});
`;

export const StyledImgContainer3 = styled(StyledImgContainer)`
  background-image: url(${img3});
  width: 100%;
`;

export const StyledLindButton = styled(Link)`
  text-decoration: none;
  color: black;
  border: 2px solid black;
  font-size: 1.2rem;
  padding: 0.8em 1.2em;
  border-radius: 8px;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    font-weight: bold;
  }

  span:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export const StyledHomeBottomContainerDiv = styled.div`
  width: 100%;
  height: 171px;
  display: flex;
  justify-content: space-between;
`;

export const StyledHomeBoxContainerDiv = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  width: calc(50% - 16px);
  max-width: calc(50% - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h3 {
    font-size: 2rem;
  }
`;

export const StyledHomeBoxTextWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
`;

export const StyledHomeBoxHeader3Wrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
