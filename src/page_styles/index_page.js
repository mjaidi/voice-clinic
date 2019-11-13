import styled from "styled-components"
import {
  shadowMain,
  headerFont,
  borderRadius,
  blackTransparent,
  background,
} from "../components/Layout/variables"

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 6rem;
  font-family: ${headerFont};
  color: ${blackTransparent};
  font-size: 70px;
  text-transform: uppercase;
  &:before,
  &:after {
    content: "";
    display: inline-block;
    margin: 0 0.6em;
    border: solid;
    top: -25px;
    position: relative;
    width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
    margin-bottom: 2rem;
    &:before,
    &:after {
      display: none;
    }
  }
`

export const About = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-family: ${headerFont};
    color: ${blackTransparent};
    font-size: 50px;
    text-transform: uppercase;
  }
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    max-width: 100%;
    margin-right: 2rem;
    box-shadow: ${shadowMain};
  }
  p {
    white-space: pre-wrap;
    text-align: justify;
  }
`

export const Services = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  a {
    text-decoration: none;
    color: inherit;
    height: 12rem;
    display: block;
  }
  .service-card {
    transition: all 0.5s;
    box-shadow: ${shadowMain};
    border-radius: ${borderRadius};
    height: 100%;
    background: white;

    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      max-height: 70%;
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

export const Instagram = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  .insta-card {
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
      z-index: 30;
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
