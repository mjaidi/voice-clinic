import { createGlobalStyle } from "styled-components"
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
