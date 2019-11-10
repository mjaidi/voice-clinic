import styled from "styled-components"
import {
  shadowMain,
  headerFont,
  borderRadius,
  accentMain,
} from "../components/Layout/variables"

export const ServicesWrapper = styled.div`
  margin: 2rem auto;
`
export const ServicesCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${accentMain};
  img {
    width: 38%;
    border-radius: ${borderRadius};
    box-shadow: ${shadowMain};
    object-fit: cover;
    height: 15rem;
  }
  .services-content {
    width: 55%;
    text-align: center;
    padding: 0 1.5rem;
    margin: 0 auto;
    h3 {
      font-family: ${headerFont};
      text-transform: uppercase;
    }
    p {
      white-space: pre-wrap;
      text-align: justify;
      padding-bottom: 1rem;
    }
    a {
      width: 100%;
    }
    button {
      margin: 0 auto;
    }
  }

  .hide {
    display: none;
  }
  @media (max-width: 900px) {
    margin: 0;
    img {
      width: 80%;
      height: 12rem;
    }
    .services-content {
      width: 100%;
      margin-bottom: 4rem;
    }
    .top {
      display: block;
    }
    .bottom {
      display: none;
    }
  }
`
