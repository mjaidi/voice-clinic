import styled from "styled-components"
import {
  shadowMain,
  light,
  accentMain,
  accentSecondary,
  background,
  mainFont,
} from "../components/Layout/variables"

export const ContactForm = styled.section`
  margin: 0 auto;
  max-width: 900px;
  padding: 3rem;
  box-shadow: ${shadowMain};
  background: ${background};
  .form-group {
    padding-bottom: 2rem;
    label {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }
    input,
    textarea {
      margin-top: 0.5rem;
      width: 100%;
      line-height: 2;
      padding: 0.5rem;
      font-family: ${mainFont};
      border: 1px solid ${light};
      &:focus {
        border-color: ${accentSecondary};
        outline-color: ${background};
      }
      &.error {
        border-color: ${accentMain};
      }
    }
    .error-message {
      color: ${accentMain};
      font-size: 12px;
      font-family: ${mainFont};
    }
    textarea {
      min-height: 10rem;
    }
  }
`
export const Feedback = styled.div``
