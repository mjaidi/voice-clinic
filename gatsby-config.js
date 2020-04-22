require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Voice Clinic`,
    description: `-`,
    author: `@mjaidi`,
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300,400,500,700`,
          `PT Sans\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/home`,
        name: `home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/categories`,
        name: `categories`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site web Clinique des voix`,
        short_name: `Clinique des voix`,
        start_url: `/`,
        background_color: `#0071B8`,
        theme_color: `#0071B8`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/contact/`, "index"],
    //   },
    // },
  ],
}
