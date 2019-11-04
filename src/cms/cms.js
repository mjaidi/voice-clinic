import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import { info } from "./info"
import { projects } from "./projects"
CMS.registerMediaLibrary(uploadcare)

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "master",
      squash_merges: true, // @NOTE Beta feature
    },
    media_library: {
      name: "uploadcare",
      config: {
        publicKey: process.env.GATSBY_UPLOADCARE_API_KEY,
      },
      settings: {
        autoFilename: true,
      },
    },
    public_folder: "/assets",
    collections: [info, projects],
  },
})
