import { seo } from "./seo"

export const info = {
  label: "Info",
  name: "info",
  files: [
    {
      name: "main",
      label: "Main",
      file: "content/info.yml",
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
      ],
    },
  ],
}
