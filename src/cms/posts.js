import { seo } from "./seo"

export const posts = {
  label: "Publications",
  name: "posts",
  folder: "content/posts",
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  create: true,
  fields: [
    ...seo,
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Statut",
      name: "status",
      widget: "select",
      options: ["Publié", "Mis en avant", "En cours"],
      default: "Publié",
    },
    {
      label: "Date",
      name: "date",
      widget: "date",
      default: new Date(),
    },
    {
      label: "Image de couverture",
      name: "featured_image",
      widget: "image",
      required: false,
    },
    {
      label: "Contenu",
      name: "content",
      widget: "markdown",
    },
    {
      label: "Catégorie",
      name: "category",
      widget: "relation",
      required: true,
      collection: "categories",
      searchFields: ["title"],
      valueField: "title",
    },
  ],
}
