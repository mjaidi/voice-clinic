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
      label: "Catégorie",
      name: "category",
      widget: "relation",
      required: true,
      collection: "categories",
      searchFields: ["title"],
      valueField: "title",
    },
    {
      label: "Titre",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Image de couverture",
      name: "featured_image",
      widget: "image",
      required: false,
    },
    {
      label: "Sections",
      name: "sections",
      widget: "list",
      fields: [
        { label: "Titre", name: "title", widget: "string", required: true },
        {
          label: "Contenu",
          name: "text",
          widget: "markdown",
          required: false,
        },
        {
          label: "Titre Vidéo",
          name: "video_title",
          widget: "string",
          hint: "Mettre le titre de la vidéo que vous voulez intégrer",
          required: false,
        },
        {
          label: "Vidéo",
          name: "video",
          widget: "string",
          hint: "Mettre le lien youtube de la vidéo que vous voulez intégrer",
          required: false,
        },
        {
          label: "Téléchargements",
          name: "downloads",
          widget: "list",
          required: false,
          fields: [
            { label: "Titre", name: "title", widget: "string" },
            { label: "Déscription", name: "description", widget: "text" },
            { label: "Document PDF", name: "document_pdf", widget: "file" },
          ],
        },
        {
          label: "Foire aux questions",
          name: "faq",
          widget: "list",
          required: false,
          fields: [
            { label: "Question", name: "question", widget: "string" },
            { label: "Réponse", name: "answer", widget: "text" },
          ],
        },
      ],
    },
  ],
}
