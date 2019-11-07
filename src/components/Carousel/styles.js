import styled from "styled-components"

export const CarouselContainer = styled.div`
  display: flex;
  font-family: unset;
  position: relative;
  width: 100%;

  @media (max-width: 599px) {
    font-size: 90%;
  }
`
export const CarouselImage = styled.div`
  height: ${props => props.height || "90vh"};
  overflow: hidden;
  width: 100%;
  position: relative;
  z-index: 1;
  .CarouselImageContainer {
    opacity: 0;
    -webkit-transition: opacity 0.4s ease-in-out;
    -moz-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
    overflow: hidden;
    width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
    justify-content: flex-end;
    flex-direction: column;
  }

  .CarouselImageContainer .CarouselImageLabel {
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    position: absolute;
    top: 38%;
    letter-spacing: 2px;
    text-shadow: 1px 1px 19px rgba(0, 0, 0, 1);
    h2 {
      margin: 0;
      font-size: 35px;
    }
  }

  .CarouselImageContainer .CarouselImageSubline {
    width: 100%;
    display: flex;
    color: white;
    position: absolute;
    top: 45%;
    justify-content: center;
    letter-spacing: 2px;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    h4 {
      margin: 0;
      font-size: 20px;
    }
  }

  .CarouselImageContainer .CarouselImageTextOverlay {
    width: 100%;
    display: flex;
    height: 120px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent);
  }

  .CarouselImageCurrent {
    opacity: 1;
  }
  .CarouselImageLabel {
    position: absolute;
    display: flex;
    justify-content: center;
  }
`
export const CarouselSteps = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  bottom: 10px;
  z-index: 2;

  .CarouselStep {
    color: white;
    margin: 0 10px;
    opacity: 0.4;
    -webkit-transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -o-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
    user-select: none;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.7);
    font-size: 1.5em;
  }

  .CarouselStep:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  .CarouselCurrentStep {
    opacity: 0.8;
  }

  .CarouselCurrentStep:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
export const CarouselArrow = styled.div`
  height: ${props => props.height || "90vh"};
  line-height: ${props => props.height || "90vh"};
  vertical-align: middle;
  position: absolute;
  background: linear-gradient(270deg, rgba(0, 0, 0, 0.8), transparent);
  padding: 0 40px;
  -webkit-transition: opacity 0.3s ease-in-out;
  -moz-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  z-index: 2;
  left: 0;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  .CarouselArrowIcon {
    font-weight: bold;
    font-size: 25px;
    color: white;
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
    left: 0;
    right: unset;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.8), transparent);
  }

  &.ArrowNext {
    right: 0;
    left: unset;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.8), transparent);
  }
`
