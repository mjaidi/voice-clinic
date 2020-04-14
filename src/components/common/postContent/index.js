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

import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import faqImg from "../../../../content/assets/faq.svg"
import instructionImg from "../../../../content/assets/instructions.svg"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostContent = ({ sections }) => {
  return (
    <Fragment>
      <ArticleSummary>
        {sections.map((s, index) => (
          <div className="summary-item" key={index}>
            <div className="number">{index + 1}</div>
            <a href={`#${s.title}`}>{s.title}</a>
          </div>
        ))}
      </ArticleSummary>
      <MainArticle>
        {sections.map((s, index) => {
          const content = remark()
            .use(recommended)
            .use(remarkHtml)
            .processSync(s.text)
            .toString()
          return (
            <ArticleSection
              lightBg={index % 2 === 1 ? true : false}
              image={
                index % 2 === 1 ? (s.faq ? faqImg : instructionImg) : false
              }
            >
              <div className="section-wrapper">
                <div className="anchor" id={s.title}></div>
                <h3 class="article-subtitle">
                  <span class="number">{index + 1}.</span> {s.title}
                </h3>
                {s.text && (
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                )}
                {s.video ? (
                  <VideoWrapper>
                    <Video videoSrcURL={s.video} videoTitle={s.video_title} />
                  </VideoWrapper>
                ) : (
                  ""
                )}
                {s.downloads &&
                  s.downloads.map((d, index) => {
                    return (
                      <Worksheet key={index}>
                        <div>
                          <h4>{d.title}</h4>
                          <p>{d.description}</p>
                        </div>
                        <Download
                          href={d.document_pdf}
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
                {s.faq &&
                  s.faq.map((f, index) => {
                    return (
                      <FAQ key={index}>
                        <h4>{f.question}</h4>
                        <p>{f.answer}</p>
                      </FAQ>
                    )
                  })}
              </div>
            </ArticleSection>
          )
        })}
      </MainArticle>
    </Fragment>
  )
}
export default PostContent
