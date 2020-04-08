import React, { Fragment } from "react"
import styled from "styled-components"
import { accentMain } from "../Layout/variables"
import Video from "./video"

const Content = styled.div`
  padding: 2rem 0;
`
const Download = styled.a`
  font-weight: bold;
  &:hover {
    color: ${accentMain};
  }
`

const PostContent = ({
  introduction,
  instructions,
  video,
  video_title,
  worksheets,
  faq,
}) => {
  console.log(worksheets)
  console.log(faq)
  return (
    <Fragment>
      <h3>1. Introduction</h3>
      <Content dangerouslySetInnerHTML={{ __html: introduction }}></Content>
      <Video videoSrcURL={video} videoTitle={video_title} />
      <h3>2. Instructions</h3>
      <Content dangerouslySetInnerHTML={{ __html: instructions }}></Content>
      <h3>3. Exercises</h3>

      {worksheets.map((w, index) => {
        return (
          <Fragment>
            <h4>{w.title}</h4>
            <p>{w.description}</p>
            <Download
              href={w.document_pdf}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Télécharger
            </Download>
          </Fragment>
        )
      })}
      <h3>4. Quéstions Fréquentes</h3>
      {faq.map((f, index) => {
        return (
          <Fragment>
            <h4>{f.question}</h4>
            <p>{f.answer}</p>
          </Fragment>
        )
      })}
    </Fragment>
  )
}
export default PostContent
