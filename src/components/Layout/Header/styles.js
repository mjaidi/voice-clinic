import styled from "styled-components"
import { accentMain, shadowMain } from "../variables"
export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: ${accentMain};
  box-shadow: ${shadowMain};
  z-index: 20;
  padding: 0.5rem 0;
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;
	`}
`
