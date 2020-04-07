// import React from "react"
import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import { home } from "./home"
import { posts } from "./posts"
import { categories } from "./categories"

// import { PostsPageTemplate } from "../templates/posts_template"

CMS.registerMediaLibrary(cloudinary)
// NEED TO CREATE A POSTPAGETEMPLATE THAT CAN BE USED BOTH FOR THE CMS PREVIEW AND FOR THE ACTUAL APP
// CMS.registerPreviewTemplate("posts-page", ({ entry }) => (
//   <PostsPageTemplate {...entry.toJS().data} />
// ))

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "master",
    },
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
      },
      settings: {
        autoFilename: true,
      },
    },
    public_folder: "/assets",
    collections: [home, categories, posts],
  },
})
