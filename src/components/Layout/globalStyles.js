import styled, { keyframes, createGlobalStyle } from "styled-components"
import { dark, background } from "./variables"
export const Global = createGlobalStyle`
html {
  font-family: 'Quicksand', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${background};
  color: ${dark}
}

p {
  line-height: 1.4
}

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
}
`

const entranceAnimation = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
  z-index: 100;

}
99% {
  transform: scale(80);
  opacity: 1;
  z-index: 100;
}
100% {
  opacity: 0;
  z-index: -1;
}
`

export const Entrance = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${entranceAnimation} 5s ease-in 1;
  img {
    position: relative;
    right: 7%;
    width: 100%;
  }
  @media (max-width: 600px) {
    img {
      right: 7%;
    }
  }
`
