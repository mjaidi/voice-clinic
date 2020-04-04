import styled from "styled-components"
import {
  shadowMain,
  headerFont,
  accentMain,
} from "../components/Layout/variables"

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  font-family: ${headerFont};
  color: ${accentMain};
  font-size: 40px;
  font-weight: lighter;
  text-transform: uppercase;
  &:before,
  &:after {
    content: "";
    display: inline-block;
    margin: 0 0.5em;
    border: solid;
    border-width: thin;
    top: -10px;
    position: relative;
    width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 2rem;
    &:before,
    &:after {
      display: none;
    }
  }
`

export const About = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    max-width: 100%;
    margin-right: 2rem;
    position: relative;
    top: 2.5rem;
    box-shadow: ${shadowMain};
  }
`
