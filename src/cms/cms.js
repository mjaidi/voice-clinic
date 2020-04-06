import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import { home } from "./home"
import { posts } from "./posts"
import { categories } from "./categories"
CMS.registerMediaLibrary(cloudinary)

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
