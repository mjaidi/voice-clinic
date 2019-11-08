import { seo } from "./seo"

export const home = {
  label: "Home",
  name: "home",
  files: [
    {
      name: "banner",
      label: "Banner",
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
        {
          label: "Banner Images",
          name: "banner_gallery",
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
      name: "about",
      label: "About",
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
      ],
    },
    {
      name: "clients",
      label: "Clients",
      file: "content/home/clients.md",
      fields: [
        {
          label: "Logos Clients",
          name: "client_gallery",
          widget: "list",
          fields: [
            { label: "Nom", name: "name", widget: "string", required: false },

            {
              label: "Logo",
              name: "logo",
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
          label: "Numéro Téléphone",
          name: "phone",
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
