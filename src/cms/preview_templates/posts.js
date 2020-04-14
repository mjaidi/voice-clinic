import React from "react"
import PropTypes from "prop-types"
import PostContent from "../../components/common/postContent"
import { StyleSheetManager } from "styled-components"

export const PostPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <PostsTemplate
      category={entry.getIn(["data", "category"])}
      title={entry.getIn(["data", "title"])}
      featuredImage={getAsset(entry.getIn(["data", "featured_image"]))}
      sections={entry.getIn(["data", "sections"]).toJS()}
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

const PostsTemplate = ({ category, title, featuredImage, sections }) => {
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
          <PostContent sections={sections} />
        </div>
      </section>
    </StyleSheetManager>
  )
}
