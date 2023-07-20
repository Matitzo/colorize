import styled from "styled-components";

export const MenuContainer = styled.div`
  z-index: 3;
  display: ${(props) => (props.toggleHamburger ? "flex" : "none")};
  justify-content: end;
  height: 100vh;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border-left: 1px solid black;

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 2em;

    li {
      width: fit-content;
      margin: 1em 0;
    }
  }
`;

export const MenuSideWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
  opacity: 1;
  padding-top: 6em;
  transform: translateX(+100%);
  -webkit-transform: translateX(+100%);
  
  animation: ${(props) =>
    props.toggleHamburger
      ? "slide-in 0.5s forwards"
      : "slide-out 0.5s forwards"};

  -webkit-animation: ${(props) =>
    props.toggleHamburger
      ? "slide-in 0.5s forwards"
      : "slide-out 0.5s forwards"};
  


    
@keyframes slide-in {
    100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
}
    
@keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(+100%); }
}

@-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(+100%); }
`;
