import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import { home } from "./home"
import { projects } from "./projects"
import { services } from "./services"
CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "github",
      repo: "mjaidi/falu-deco",
      branch: "master",
      squash_merges: true, // @NOTE Beta feature
    },
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: "faludeco",
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
      },
      settings: {
        autoFilename: true,
      },
    },
    public_folder: "/assets",
    collections: [home, projects, services],
  },
})
