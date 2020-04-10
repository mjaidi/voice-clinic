import React, { Fragment } from "react"
import Video from "../video"
import {
  ArticleSummary,
  Download,
  MainArticle,
  ArticleSection,
  VideoWrapper,
  Worksheet,
  FAQ,
} from "./styles"
import faqImg from "../../../../content/assets/faq.svg"
import instructionImg from "../../../../content/assets/instructions.svg"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostContent = ({
  introduction,
  instructions,
  video,
  video_title,
  worksheets,
  faq,
}) => {
  return (
    <Fragment>
      <ArticleSummary>
        <div className="summary-item">
          <div className="number">1</div>
          <a href="#intro">Introduction</a>
        </div>
        <div className="summary-item">
          <div className="number">2</div>
          <a href="#instructions">Instructions</a>
        </div>
        <div className="summary-item">
          <div className="number">3</div>
          <a href="#worksheets">Exercises</a>
        </div>
        <div className="summary-item">
          <div className="number">4</div>
          <a href="#faq">Foire au questions</a>
        </div>
      </ArticleSummary>
      <MainArticle>
        <ArticleSection>
          <div className="section-wrapper">
            <div className="anchor" id="intro"></div>
            <h3 class="article-subtitle">
              <span class="number">1.</span> Introduction
            </h3>
            <div dangerouslySetInnerHTML={{ __html: introduction }}></div>
            {video ? (
              <VideoWrapper>
                <Video videoSrcURL={video} videoTitle={video_title} />
              </VideoWrapper>
            ) : (
              ""
            )}
          </div>
        </ArticleSection>

        <ArticleSection lightBg image={instructionImg}>
          <div className="section-wrapper">
            <div className="anchor" id="instructions"></div>
            <h3 class="article-subtitle">
              <span class="number">2.</span> Instructions
            </h3>
            <div dangerouslySetInnerHTML={{ __html: instructions }}></div>
          </div>
        </ArticleSection>

        <ArticleSection>
          <div className="section-wrapper">
            <div className="anchor" id="worksheets"></div>
            <h3 class="article-subtitle">
              <span class="number">3.</span> Exercises
            </h3>

            {worksheets.map((w, index) => {
              return (
                <Worksheet key={index}>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.description}</p>
                  </div>
                  <Download
                    href={w.document_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Télécharger
                  </Download>
                </Worksheet>
              )
            })}
          </div>
        </ArticleSection>

        <ArticleSection lightBg image={faqImg}>
          <div className="section-wrapper">
            <div className="anchor" id="faq"></div>

            <h3 class="article-subtitle">
              <span class="number">4.</span> Foire au questions
            </h3>
            {faq.map((f, index) => {
              return (
                <FAQ key={index}>
                  <h4>{f.question}</h4>
                  <p>{f.answer}</p>
                </FAQ>
              )
            })}
          </div>
        </ArticleSection>
      </MainArticle>
    </Fragment>
  )
}
export default PostContent
