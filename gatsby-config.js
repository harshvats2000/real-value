module.exports = {
  siteMetadata: {
    title: "real-value",
    siteUrl: "https://real-value.netlify.app"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`
      },
      __key: "content"
    },
    "gatsby-transformer-remark"
  ]
};
