import styled from "styled-components"

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  height: 80vh;
  width: 100%;
  position: relative;
  &:after {
    content: "";
    background: rgba(20, 20, 20, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  img {
    object-fit: cover;
  }
  h1 {
    position: relative;
    top: -80%;
    text-align: center;
    color: ${props => props.color || "white"};
    z-index: 10;
  }
  p {
    position: relative;
    font-size: 20px;
    top: -80%;
    text-align: center;
    color: ${props => props.color || "white"};
    z-index: 10;
  }
`
