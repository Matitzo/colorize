import styled from "styled-components";

interface HamburgerProps {
  readonly toggleHamburger: boolean;
}

export const HamburgerButton = styled.button`
  border: none;
  background-color: white;
  height: fit-content;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerBar = styled.div`
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 25px;
`;

export const HamburgerBar1 = styled<HamburgerProps>(HamburgerBar)`
  ${(props) =>
    props.toggleHamburger
      ? "transform: translate(0, 8px) rotate(-45deg);"
      : "transform: none;"}

  ${(props) => props.toggleHamburger && "position: fixed;"}
`;
export const HamburgerBar2 = styled<HamburgerProps>(HamburgerBar)`
  ${(props) => props.toggleHamburger && "opacity: 0;"}
`;

export const HamburgerBar3 = styled<HamburgerProps>(HamburgerBar)`
  ${(props) =>
    props.toggleHamburger && "transform: translate(0, -8px) rotate(45deg);"}

  ${(props) => props.toggleHamburger && "position: fixed;"}
`;
