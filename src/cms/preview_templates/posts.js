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

const PostsTemplate = ({ introduction, category, title, featuredImage }) => {
  const formatedIntroduction = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(introduction)
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
          <PostContent introduction={formatedIntroduction} />
        </div>
      </section>
    </StyleSheetManager>
  )
}
