const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const indexTemplate = path.resolve(`src/templates/idea-index.js`);
  const ideaTemplate = path.resolve(`src/templates/idea.js`);

  // Query items in JSON
  const result = await graphql(`
    query {
      allIdeasJson(
        sort: { fields: [created_at], order: DESC }
      ) {
        edges {
          node {
            id
            created_at(formatString: "D MMM YYYY")
          }
        }
      }
    }
  `)

  // Determine pagination
  const ideas = result.data.allIdeasJson.edges;
  const ideasPerPage = 20;
  const numPages = Math.ceil(ideas.length / ideasPerPage);

  // Create pages from items
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/ideas` : `/ideas/${i + 1}`,
      component: indexTemplate,
      context: {
        limit: ideasPerPage,
        skip: i * ideasPerPage,
        numPages,
        currentPage: i + 1,
        tag: null,
      },
    })
  })

  result.data.allIdeasJson.edges.forEach(({ node }) => {
    createPage({
      path: `/idea/${node.id}`,
      component: ideaTemplate,
      context: {
        id: node.id
      }
    })
  })
}
