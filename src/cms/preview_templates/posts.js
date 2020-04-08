import React from "react"
import PropTypes from "prop-types"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

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
  const formatedContent = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content)
    .toString()
  return (
    <section className="section">
      <div className="container content">
        <div className="pageHeader">
          <h1 className="title">{title}</h1>
          <img src={featuredImage} alt="featured" />
        </div>
        <p className="category">
          <strong>Catégorie: </strong> {category}
        </p>
        <div
          class="content"
          dangerouslySetInnerHTML={{ __html: formatedContent }}
        ></div>
      </div>
    </section>
  )
}
