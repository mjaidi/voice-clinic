import styled from "styled-components"
import {
  shadowMain,
  accentMain,
  borderRadius,
} from "../components/Layout/variables"

export const ProjectCard = styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${shadowMain};

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
    overflow: hidden;
    max-height: ${props => (props.show ? "50rem" : "10rem")};
    transition: max-height 0.9s linear;
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
    padding-bottom: 2rem;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .gallery-img {
    height: 120px;
    @media (max-width: 600px) {
      height: 90px;
    }
  }
  .contract {
    display: ${props => (props.show ? "block" : "none")};
    color: ${accentMain};
    padding-bottom: 2rem;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
`
