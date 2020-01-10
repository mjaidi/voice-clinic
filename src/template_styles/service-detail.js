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
  .uppercase {
    text-transform: capitalize;
  }
`

export const ServiceNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  li {
    color: ${accentMain};
    font-weight: bold;
    padding: 0.75rem;
    font-size: 20px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
  p {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-top: 1px dashed;
    border-bottom: 1px dashed;
    text-align: justify;
  }
`
