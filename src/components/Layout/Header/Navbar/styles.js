import styled from "styled-components"
import { light } from "../../variables"

export const Wrapper = styled.div`
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 4rem;
  a {
    color: ${light};
  }
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }
`
export const Logo = styled.img`
  height: 3.5rem;
  padding: 0;
  margin: 0;
  right: 25rem;
  position: absolute;
  left: 0;
  top: 10px;
  @media (max-width: 900px) {
    max-height: 3rem;
  }
`
