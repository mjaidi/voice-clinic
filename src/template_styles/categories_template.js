import styled from "styled-components"
import { borderRadius, boxShadow } from "../components/Layout/variables"
export const Content = styled.div`
  padding: 5rem 0;
`

export const PostsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  img {
    max-width: 50%;
    margin-right: 10px;
  }
`
