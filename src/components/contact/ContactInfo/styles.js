import styled from "styled-components"
import {
  shadowMain,
  accentMain,
  borderRadius,
  headerFont,
} from "../../Layout/variables"

export const ContactInfo = styled.div`
  background: ${accentMain};
  color: white;
  a {
    color: white;
  }
  font-size: 20px;
  font-weight: regular;
  padding: 3rem;
  min-height: 20rem;
  font-family: ${headerFont};
  box-shadow: ${shadowMain};
  border-radius: ${borderRadius};
  svg {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    text-align: center;

    font-size: 18px;
    svg {
      top: 0;
      font-size: 30px;
    }
  }
`
