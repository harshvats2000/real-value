exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { name: { ne: "notice" } } }) {
        edges {
          node {
            frontmatter {
              category
              slug
              name
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge) => {
    const { slug, category } = edge.node.frontmatter;
    actions.createPage({
      path: `${category}/${slug}`,
      component: require.resolve("./src/templates/serviceItem.js"),
      context: { slug }
    });
  });
};
