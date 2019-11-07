import { seo } from "./seo"

export const services = {
  label: "Services",
  name: "services",
  folder: "content/services",
  create: true,
  fields: [
    ...seo,
    {
      label: "Titre",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Description",
      name: "description",
      widget: "markdown",
      required: true,
    },
    {
      label: "Image_fond",
      name: "image",
      widget: "image",
      required: true,
      allow_multiple: false,
    },
    {
      label: "Catégories",
      name: "categories",
      widget: "list",
      fields: [
        { label: "Titre", name: "title", widget: "string", required: true },
        {
          label: "Sous-Titre",
          name: "subtitle",
          widget: "string",
          required: false,
        },
        {
          label: "Images (insérer plusieurs)",
          name: "images",
          widget: "image",
          allow_multiple: true,
          required: true,
          media_library: {
            config: {
              multiple: true,
            },
          },
        },
      ],
    },
  ],
}
