import styled from "styled-components"
import {
  borderRadius,
  shadowMain,
  shadowHover,
  smBreakpoint,
} from "../components/Layout/variables"
export const Content = styled.div`
  padding: 5rem 0;
`

export const PostsCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${borderRadius};
  box-shadow: ${shadowMain};
  transition: 0.5s all;
  img {
    max-width: 50%;
    margin-right: 10px;
    height: 250px;
    border-radius: ${borderRadius} 0 0 ${borderRadius};
  }
  &:hover {
    box-shadow: ${shadowHover};
  }
  @media (max-width: ${smBreakpoint}) {
    img {
      height: 150px;
    }
  }
`
