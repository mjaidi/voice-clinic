import React from "react"
import styled from "styled-components"
import { accentMain } from "../Layout/variables"

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${accentMain};
  overflow: hidden;
  .loading {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .loading div {
    position: absolute;
    background: #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loading 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .loading div:nth-child(2) {
    animation-delay: -0.7s;
  }
  @keyframes loading {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`
const Loading = () => (
  <Loader>
    <div className="loading">
      <div></div>
      <div></div>
    </div>
  </Loader>
)

export default Loading
