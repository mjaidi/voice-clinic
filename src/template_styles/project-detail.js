import styled from "styled-components"

export const GalleryItem = styled.div`
  width: 32%;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s;
  cursor: pointer;
  img {
    margin: 0;
  }
  @media (max-width: 900px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: 98%;
  }
  &:hover {
    transform: scale(1.05);
  }
`
