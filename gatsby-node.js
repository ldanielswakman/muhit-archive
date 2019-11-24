const path = require('path');
const data = require('./data/ideas.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/templates/idea.js`);

  // Create pages for each JSON entry.
  data.forEach(({ title }) => {
    const path = title;

    createPage({
      path,
      component: template,

      // Send additional data to page from JSON (or query inside template)
      context: {
        path
      }
    });
  });
};
