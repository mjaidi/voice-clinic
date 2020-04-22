import styled from "styled-components"
import {
  shadowMain,
  light,
  accentMain,
  accentSecondary,
  background,
  mainFont,
  headerFont,
  borderRadius,
} from "../Layout/variables"

export const LoginFormSection = styled.section`
  margin: 0 auto;
  max-width: 900px;
  padding: 2rem;

  box-shadow: ${shadowMain};
  background: ${background};
  border-radius: ${borderRadius};
  .form-title {
    text-align: center;
    font-family: ${headerFont};
    color: ${accentMain};
    margin-bottom: 40px;
    font-size: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-group {
    padding-bottom: 2rem;
    width: 100%;
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
      border: 2px solid ${light};
      font-size: 15px;
      &:focus {
        border-color: ${accentSecondary};
        outline: none;
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
    .fileLabel {
      cursor: pointer;
      font-size: 13px;
      padding: 0.7rem 1rem;
      background: ${accentSecondary};
      color: white;
      width: 6.5rem;
      border-radius: ${borderRadius};
    }
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
    .form-group input,
    .form-group textarea {
      width: 90%;
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
