import styled from "styled-components"
import { light, accentMain } from "../../Layout/variables"

export const Wrapper = styled.div`
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
    padding: 1rem 0;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`
export const Logo = styled.img`
  max-height: 3rem;
  padding: 0;
  margin: 0;
`

export const PhoneNumber = styled.div`
  padding: 1rem 2rem;
  margin-left: -5rem;
  background: ${accentMain};
  color: ${light};
  border-radius: 25px;
  svg {
    margin-right: 1rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
