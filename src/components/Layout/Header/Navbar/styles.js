import styled from "styled-components"
import { light, accentMain } from "../../variables.js"

export const Wrapper = styled.div`
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  position: relative;

  a {
    color: #212121;
  }
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }
`
export const Logo = styled.img`
  max-height: 4rem;
  padding: 0;
  margin: 0;
  right: 25rem;
  width: 7rem;
  @media (max-width: 900px) {
    max-height: 3rem;
  }
`

export const PhoneNumber = styled.div`
  padding: 0.7rem 1.5rem;
  background: ${accentMain};
  color: ${light};

  a {
    color: ${light};
  }
  border-radius: 25px;
  position: absolute;
  right: 0rem;
  svg {
    margin-right: 1rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
