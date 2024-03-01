import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  /* scroll-behavior: smooth; */
}

body {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  justify-content: center;
  align-items: center;
}

body::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url('/Cat82_generated.jpg');
  background-size: contain;
  background-attachment: fixed;
  opacity: 0.05;
  z-index: -1;
}


`;
