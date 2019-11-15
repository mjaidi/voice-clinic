import React from "react"
import styled, { keyframes } from "styled-components"
import { accentMain, headerFont } from "../Layout/variables"
const Button = props => (
  <ButtonWrapper props={props} disabled={props.disabled}>
    {!props.disabled && props.children}
    {props.disabled && "..."}
  </ButtonWrapper>
)
const BounceAnimation = keyframes`
  0% { opacity: 0.4; letter-spacing: 5px }
  50% { opacity: 0.7; letter-spacing: 2px}
  100% { opacity: 0.4; letter-spacing: 5px }
`

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: ${props => props.props.background || accentMain};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "500"};
  font-family: ${props => props.props.fontFamily || headerFont};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    background: lighten(${props => props.props.background || accentMain}, 10%);
  }
  &:disabled {
    font-weight: bold;
    &:hover {
      background: ${props => props.props.background || accentMain};
      box-shadow: none;
      cursor: default;
    }
    animation: ${BounceAnimation} 2s linear infinite;
  }
`

export default Button
