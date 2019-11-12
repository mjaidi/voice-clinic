import styled from "styled-components"
import {
  shadowMain,
  light,
  accentMain,
  accentSecondary,
  background,
  mainFont,
  borderRadius,
  headerFont,
} from "../components/Layout/variables"

export const ContactForm = styled.section`
  margin: 0 auto;
  max-width: 900px;
  padding: 3rem;
  box-shadow: ${shadowMain};
  background: ${background};
  border-radius: ${borderRadius};

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
      font-size: 18px;
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
export const Feedback = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100;
  .feedback-content {
    padding: 4rem;
    max-width: 500px;
    position: relative;
    background: ${background};
    border-radius: ${borderRadius};
  }
  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 25px;
  }
  &.show {
    display: flex;
  }
`
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
