import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
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

    collections: [
      {
        name: "blog",
        label: "Blog",
        folder: "content/blog",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        editor: {
          preview: false,
        },
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Publish Date", name: "date", widget: "date" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Body", name: "body", widget: "markdown" },
          { label: "Photo", name: "photo", widget: "image", required: false },
          { label: "Photo2", name: "photo2", widget: "image", required: false },
        ],
      },
    ],
  },
})
