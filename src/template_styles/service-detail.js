import styled from "styled-components"
import { accentMain, headerFont } from "../components/Layout/variables"
export const GalleryItem = styled.div`
  width: 32%;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s;
  cursor: pointer;
  img {
    margin: 0;
    width: 100%;
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
export const CategorySelector = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  justify-content: space-evenly;
  li {
    font-weight: bold;
    &.active {
      color: ${accentMain};
    }
    &:hover {
      color: ${accentMain};
      cursor: pointer;
    }
  }
`

export const CategoryHeader = styled.h2`
  text-align: center;
  font-family: ${headerFont};
  color: ${accentMain};
  margin: 2rem auto;
`

export const ServiceNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
