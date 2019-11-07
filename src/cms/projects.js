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
      required: true,
    },
    {
      label: "Description",
      name: "description",
      widget: "markdown",
      required: true,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: true,
      allow_multiple: false,
    },
  ],
}
