module.exports = {
  siteMetadata: {
    title: "Real Value",
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
        name: "services",
        path: `${__dirname}/content/services`
      },
      __key: "services"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notice",
        path: `${__dirname}/content/notice`
      },
      __key: "notice"
    },
    "gatsby-transformer-remark"
  ]
};
