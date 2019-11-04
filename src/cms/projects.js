import { seo } from "./seo"

export const projects = {
  label: "Projets",
  name: "projects",
  folder: "content/projects",
  create: true,
  fields: [
    ...seo,
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Date",
      name: "date",
      widget: "date",
      format: "YYYY-MM-DD",
    },
    {
      label: "Text",
      name: "text",
      widget: "markdown",
    },
    {
      label: "Gallerie",
      name: "gallerie",
      widget: "list",
      fields: [
        { label: "Nom", name: "nom", wiget: "string" },
        { label: "Image", name: "image", wiget: "image" },
      ],
    },
  ],
}
