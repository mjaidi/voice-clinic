import { seo } from "./seo"

export const categories = {
  label: "Catégories",
  name: "categories",
  editor: {
    preview: false,
  },
  folder: "content/categories",
  slug: "{{slug}}",
  create: true,
  fields: [
    ...seo,
    {
      label: "Icone",
      name: "icon",
      widget: "image",
      allow_multiple: false,
      required: true,
    },
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
  ],
}
