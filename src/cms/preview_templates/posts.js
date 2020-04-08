import React from "react"
import PropTypes from "prop-types"

export const PostPreview = ({ entry, widgetFor }) => {
  return (
    <PostsTemplate
      content={entry.getIn(["data", "content"])}
      category={entry.getIn(["data", "category"])}
      title={entry.getIn(["data", "title"])}
    />
  )
}

PostsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

const PostsTemplate = ({ content, category, title }) => {
  return (
    <section className="section">
      <div className="container content">
        <h1 className="title">{title}</h1>
        <h5>Catégorie: {category}</h5>
        {content}
      </div>
    </section>
  )
}
