exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "services" }, extension: { eq: "md" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                category
                slug
              }
            }
          }
        }
      }
    }
  `);

  data.allFile.edges.forEach((edge) => {
    const { slug, category } = edge.node.childMarkdownRemark.frontmatter;
    actions.createPage({
      path: `${category}/${slug}`,
      component: require.resolve("./src/templates/serviceItem.js"),
      context: { id: edge.node.id }
    });
  });
};
