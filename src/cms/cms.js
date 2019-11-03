import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
CMS.registerMediaLibrary(cloudinary)

console.log(process.env.GATSBY_CLOUDINARY_API_KEY)

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
