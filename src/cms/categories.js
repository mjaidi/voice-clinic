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
      required: true,
    },
    {
      label: "Positionement",
      name: "order",
      widget: "number",
    },
    {
      label: "Connéxion Obligatoire?",
      name: "needs_login",
      widget: "boolean",
    },
    {
      label: "Text",
      name: "text",
      widget: "markdown",
      required: false,
    },
  ],
}
