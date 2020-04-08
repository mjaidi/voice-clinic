import React from "react"
import PropTypes, { any } from "prop-types"

export const PostPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <PostsTemplate
      content={entry.getIn(["data", "content"])}
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

const PostsTemplate = ({ content, category, title, featuredImage }) => {
  return (
    <section className="section">
      <div className="container content">
        <h1 className="title">{title}</h1>
        <h5>Catégorie: {category}</h5>
        <img src={featuredImage} alt="featured" />
        {content}
      </div>
    </section>
  )
}
