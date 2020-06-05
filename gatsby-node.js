exports.createPages = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const {data: {allMdx: {edges: posts}}} = await graphql(`
    {
      allMdx(sort: {fields: frontmatter___date, order:DESC}) {
        edges {
          node {
            excerpt
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  posts.forEach(({node}) => {
    const {slug} = node.frontmatter;
    createPage(
      { 
        path: slug, 
        component: require.resolve('./src/templates/post-template.js'),
        context: {
          slug: slug
        }
      }
    );
  })
}