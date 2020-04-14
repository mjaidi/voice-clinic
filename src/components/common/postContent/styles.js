import styled from "styled-components"
import {
  background,
  accentMain,
  accentMainLight,
  smBreakpoint,
  shadowMain,
  borderRadius,
} from "../../Layout/variables"

export const ArticleSummary = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  background: ${accentMainLight};
  .summary-item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    .number {
      margin-right: 10px;
      background: ${accentMain};
      color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: ${smBreakpoint}) {
    padding: 2rem 0.5rem;
    .summary-item {
      width: 100%;
      justify-content: flex-start;
      margin: 10px 0;
      font-size: 14px;
    }
  }
`

export const MainArticle = styled.article`
  .article-subtitle {
    font-size: 40px;
    font-weight: lighter;
    color: ${accentMain};
    margin: 40px 0;
    .number {
      font-weight: bold;
    }
    @media (max-width: ${smBreakpoint}) {
      font-size: 30px;
      margin: 25px 0;
    }
  }
`
export const ArticleSection = styled.section`
  padding: 70px 0;
  background-color: ${props => (props.lightBg ? accentMainLight : background)};
  background-image: url('${props => (props.image ? props.image : "none")}');
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: bottom right;
  padding-bottom: ${props => (props.image ? "130px" : "")};
  .section-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 1.0875rem 1.45rem;
  }
  @media (max-width: ${smBreakpoint}) {
    padding: 40px 0;
    padding-bottom: ${props => (props.image ? "150px" : "")};

  }
`

export const VideoWrapper = styled.div`
  display: flex;
  align-items; center;
  justify-content: center;
  margin-top: 40px;
  .video {
    width: 500px;
    height: 300px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`
export const Worksheet = styled.div`
  padding: 20px;
  background: white;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${shadowMain};
  border-radius: ${borderRadius};
  h4 {
    font-size: 20px;
  }
  @media (max-width: ${smBreakpoint}) {
    flex-direction: column;
  }
`

export const Download = styled.a`
  width: 20%;
  margin-left: 20px;
  svg {
    font-size: 30px;
    margin-right: 5px;
  }
  font-weight: bold;
  &:hover {
    color: ${accentMain};
  }
  @media (max-width: ${smBreakpoint}) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`
export const FAQ = styled.div`
  &:not(:nth-of-type(2)) {
    border-top: 1px dotted ${accentMain};
  }
  margin: 40px 0;
  h4 {
    font-size: 20px;
  }
`
