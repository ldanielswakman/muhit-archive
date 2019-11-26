const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/idea.js`);

  // Query items in JSON
  const result = await graphql(`
    query {
      allIdeasJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  // Create pages from items
  result.data.allIdeasJson.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: template,
      context: {
        id: node.id
      }
    })
  })
}
