import styled from "styled-components"
import {
  shadowMain,
  headerFont,
  borderRadius,
  background,
  accentMain,
  accentSecondary,
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

export const Services = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  .service-card {
    transition: all 0.5s;
    border-radius: ${borderRadius};
    border: 3px solid ${accentSecondary};
    height: 100%;
    background: white;
    padding: 1.5rem 0.75rem;
    position: relative;
    &:after {
      content: " ";
      display: block;
      width: 0;
      height: 50%;
      border-left: 3px solid ${accentSecondary};
      position: absolute;
      left: calc(50% - 20px);
      top: 25%;
    }
    @media (max-width: 600px) {
      border-width: 2px;
      &:after {
        border: none;
        width: 50%;
        border-top: 2px solid ${accentSecondary};
        top: 210px;
        left: 25%;
      }
    }
    &:hover {
      box-shadow: ${shadowMain};
      transform: scale(1.07);
    }
    img {
      width: 100%;
      max-height: 7rem;
      object-fit: contain;
      margin-bottom: 0;
      border-radius: ${borderRadius} ${borderRadius} 0 0;
    }
    h4 {
      text-align: center;
      padding: 1rem 0;
      margin: 0;
    }
  }
`

export const ProjetsPhares = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  .projets-card {
    border-radius: ${borderRadius};
    height: 100%;
    height: 20rem;
    position: relative;

    .react_lightgallery_item {
      height: 100%;
    }
    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
    .overlay {
      transition: 0.5s ease;
      opacity: 0;
      width: 100%;
      height: 100%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${background};
      border-radius: ${borderRadius};
      text-align: center;
      z-index: 10;
      box-sizing: border-box;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 0;
      border-radius: ${borderRadius};
    }
    &:hover {
      box-shadow: ${shadowMain};
      img {
        opacity: 0.3;
      }
      .overlay {
        opacity: 0.8;
      }
    }

    p {
      text-align: center;
      overflow: hidden;
      font-weight: bold;
    }
  }
`

export const Clients = styled.div`
  padding-top: 5rem;
  padding-bottom: 15rem;
  img {
    width: 100%;
    max-height: 15rem;
    object-fit: contain;
  }
`
