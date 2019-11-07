import styled from "styled-components"
import { shadowMain, headerFont } from "../components/Layout/variables"
export const About = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-family: ${headerFont};
    font-size: 30px;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 30rem;
    max-width: 100%;
    margin-right: 2rem;
    box-shadow: ${shadowMain};
  }
  p {
    white-space: pre-wrap;
    text-align: justify;
  }
  @media (max-width: 900px) {
    .flex {
      flex-direction: column;
    }
    img {
      margin: 0 0 2rem 0;
    }
  }
`

export const Services = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  a {
    text-decoration: none;
    color: inherit;
    margin: 1rem;
    width: 30%;
    height: 15rem;
  }
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 30px;
    font-family: ${headerFont};
  }
  .service-card {
    transition: all 0.5s;
    box-shadow: ${shadowMain};
    border-radius: 10px;
    height: 100%;
    background: white;

    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      max-height: 70%;
      object-fit: cover;
      margin-bottom: 0;
      border-radius: 10px 10px 0 0;
    }
    h4 {
      text-align: center;
      padding: 1rem 0;
      margin: 0;
    }
  }
  .service-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    a {
      width: 45%;
    }
  }
  @media (max-width: 600px) {
    a {
      width: 100%;
    }
  }
`
