import styled from "styled-components"
import { accentMain, headerFont } from "../components/Layout/variables"

export const GalleryItem = styled.div`
  height: 20rem;
  transition: all 0.5s linear;
  cursor: pointer;
  img {
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .react_lightgallery_item {
    height: 100%;
  }
  &.hide {
    display: none;
    margin: -10px;
  }
  &:hover {
    transform: scale(1.05);
  }
`
export const CategorySelector = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  justify-content: space-evenly;
  li {
    font-weight: bold;
    margin: 10px;
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
  .lowercase {
    text-transform: lowercase;
  }
`

export const ServiceNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  p {
    padding-top: 1rem;
    border-top: 1px solid;
    text-align: justify;
  }
`
