import styled from "styled-components"
import {
  shadowMain,
  accentMain,
  borderRadius,
} from "../components/Layout/variables"

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const ProjectCard = styled.div`
  margin: 1rem;
  width: 45%;
  border-radius: ${borderRadius};
  box-shadow: ${shadowMain};
  height: ${props => (props.show ? "100%" : "40rem")};
  transition: height 0.5s linear;

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
  }
  h3 {
    padding: 0 1.5rem;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }
  p {
    white-space: pre-wrap;
    padding: 0 1.5rem;
    height: ${props => (props.show ? "100%" : "10rem")};
    overflow: hidden;
    transition: height 0.5s linear;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  h5 {
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    svg {
      margin-right: 0.4rem;
    }
  }
  .expand {
    display: ${props => (!props.show ? "block" : "none")};
    color: ${accentMain};
    &:hover {
      transform: scale(1.1);
    }
  }
  .contract {
    display: ${props => (props.show ? "block" : "none")};
    color: ${accentMain};
    &:hover {
      transform: scale(1.1);
    }
  }
`
