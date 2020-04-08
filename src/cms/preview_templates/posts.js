import React from "react"
import PropTypes from "prop-types"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import PostContent from "../../components/common/postContent"
import { StyleSheetManager } from "styled-components"

export const PostPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <PostsTemplate
      introduction={entry.getIn(["data", "introduction"])}
      category={entry.getIn(["data", "category"])}
      title={entry.getIn(["data", "title"])}
      featuredImage={getAsset(entry.getIn(["data", "featured_image"]))}
      instructions={entry.getIn(["data", "instructions"])}
      video_title={entry.getIn(["data", "video_title"])}
      video={entry.getIn(["data", "video"])}
      faq={entry.getIn(["data", "faq"])}
      worksheets={entry.getIn(["data", "worksheets"])}
    />
  )
}

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.any,
}

const PostsTemplate = ({
  introduction,
  category,
  title,
  featuredImage,
  instructions,
  video_title,
  video,
  faq,
  worksheets,
}) => {
  const formatedIntroduction = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(introduction)
    .toString()
  const formatedInstructions = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(instructions)
    .toString()
  const iframe = document.querySelector(".Pane2 iframe")
  const iframeHeadElem = iframe.contentDocument.head
  return (
    <StyleSheetManager target={iframeHeadElem}>
      <section className="section">
        <div className="container content">
          <div className="pageHeader">
            <h1 className="title">{title}</h1>
            <img src={featuredImage} alt="featured" />
          </div>
          <p className="category">
            <strong>Catégorie: </strong> {category}
          </p>
          <PostContent
            introduction={formatedIntroduction}
            instructions={formatedInstructions}
            video_title={video_title}
            video={video}
            faq={faq}
            worksheets={worksheets}
          />
        </div>
      </section>
    </StyleSheetManager>
  )
}
