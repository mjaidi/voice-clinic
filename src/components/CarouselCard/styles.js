import styled from "styled-components"
import { dark, shadowMain, borderRadius, background } from "../Layout/variables"
export const CarouselContainer = styled.div`
  display: flex;
  font-family: unset;
  position: relative;
  width: 100%;
  @media (max-width: 599px) {
    font-size: 90%;
  }
`
export const CarouselCard = styled.div`
  height: ${props => props.height || "12rem"};
  overflow: hidden;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: ${borderRadius};
  box-shadow: ${shadowMain};
  .carousel-img {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    .react_lightgallery_item {
      height: 100%;
    }
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
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
  .current {
    opacity: 1;
  }
  &.accent {
    transform: scale(1.3);
  }
  &:hover {
    .overlay {
      opacity: 0.8;
    }
  }
  @media (max-width: 600px) {
    display: none;
    &.accent {
      display: flex;
      margin: 4rem 3rem;
    }
  }
`

export const CarouselArrow = styled.div`
  height: ${props => props.height || "12rem"};
  line-height: ${props => props.height || "12rem"};
  vertical-align: middle;
  position: absolute;
  padding: 0 40px;
  margin: 4rem 2rem;
  opacity: 1;
  z-index: 2;
  left: 0;
  display: flex;
  justify-content: center;
  .CarouselArrowIcon {
    font-weight: bold;
    font-size: 25px;
    color: ${dark};
    opacity: 0.7;
    user-select: none;
    display: flex;
  }
  .chevron::before {
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: "";
    height: 0.45em;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.45em;
    display: flex;
  }
  span.chevron {
    flex-direction: column;
    display: flex;
    flex-grow: 0;
    justify-content: center;
  }
  .chevron.right:before {
    right: 0.25em;
    transform: rotate(45deg);
  }
  .chevron.left:before {
    left: 0.25em;
    transform: rotate(-135deg);
  }
  &.ArrowBack {
    left: -70px;
    right: unset;
  }
  &.ArrowNext {
    right: -70px;
    left: unset;
  }
`
