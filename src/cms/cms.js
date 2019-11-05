import CMS from "netlify-cms-app"
// import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"
import { info } from "./info"
import { projects } from "./projects"
CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "master",
      squash_merges: true, // @NOTE Beta feature
    },
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: "dw6uzjc8d",
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
        // publicKey: process.env.GATSBY_UPLOADCARE_API_KEY,
      },
      settings: {
        autoFilename: true,
      },
    },
    public_folder: "/assets",
    collections: [info, projects],
  },
})
