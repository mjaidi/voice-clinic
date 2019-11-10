import styled from "styled-components"
import { accentMain } from "../Layout/variables"
export const Wrapper = styled.div`
  width: 100%;
  background: ${accentMain};
  min-height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 18px;
    font-weight: bold;
  }
`
