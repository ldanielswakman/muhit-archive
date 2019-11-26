/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  	{
  		resolve: 'gatsby-plugin-favicon',
  		options: {
      	logo: "./src/assets/images/favicon.png",
			}
  	},
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ]
}
