window.CMS_MANUAL_INIT = true

import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
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
        cloud_name: "dw6uzjc8d",
        api_key: process.env.CLOUDINARY_API_KEY,
        default_transformations: [
          [
            {
              width: 2000,
              quality: 80,
              crop: "limit",
            },
          ],
        ],
      },
    },
    // media_folder: "/static/assets",
    public_folder: "/assets",
  },
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
        { label: "Photo", name: "photo", widget: "image" },
        { label: "Photo2", name: "photo2", widget: "image" },
      ],
    },
  ],
})
