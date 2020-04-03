import styled from "styled-components"
import { accentMain } from "../variables"
export const Wrapper = styled.div`
  width: 100%;
  background: ${accentMain};
  min-height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 15px;
    font-weight: bold;
  }
`
