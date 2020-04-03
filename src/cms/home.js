import { seo } from "./seo"

export const home = {
  label: "Acceuil",
  name: "home",
  files: [
    {
      name: "main",
      label: "Main",
      file: "content/home/home.md",
      fields: [
        ...seo,
        {
          label: "Logo",
          name: "logo",
          widget: "image",
          allow_multiple: false,
          required: true,
        },
      ],
    },
    {
      name: "about",
      label: "Qui nous sommes",
      file: "content/home/about.md",
      fields: [
        {
          label: "Image",
          name: "image",
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
          label: "Text",
          name: "text",
          widget: "markdown",
          required: true,
        },
        {
          label: "Notre Equipe",
          name: "our_team",
          widget: "list",
          default: [""],
          fields: [
            { label: "Titre", name: "title", widget: "string", required: true },

            {
              label: "Image",
              name: "image",
              widget: "image",
              allow_multiple: false,
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      label: "Contact",
      file: "content/home/contact.md",
      fields: [
        {
          label: "Numéro Téléphone Affiché",
          name: "phone",
          widget: "string",
          required: true,
        },
        {
          label: "Numéro Téléphone Appeler",
          name: "phone_call",
          widget: "string",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          widget: "string",
          required: true,
        },
        {
          label: "Adresse",
          name: "address",
          widget: "string",
          required: true,
        },
      ],
    },
  ],
}
