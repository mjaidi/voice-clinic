import styled from "styled-components"
import { smBreakpoint } from "../components/Layout/variables"

export const PostLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  border-top: 1px solid;
  padding: 1rem 0;
  @media (max-width: ${smBreakpoint}) {
    flex-direction: column;
    align-items: center;
    li {
      margin-top: 15px;
    }
  }
`
