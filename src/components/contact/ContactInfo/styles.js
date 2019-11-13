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
  font-size: 20px;
  font-weight: bold;
  padding: 3rem;
  min-height: 20rem;
  font-family: ${headerFont};
  box-shadow: ${shadowMain};
  border-radius: ${borderRadius};
  .content {
    padding: 2rem 0;
  }
  svg {
    margin-right: 15px;
    font-size: 40px;
    position: relative;
    top: 10px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    svg {
      top: 0;
      font-size: 30px;
    }
  }
`
