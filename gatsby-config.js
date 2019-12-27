module.exports = {

  siteMetadata: {
    title: `Muhit Archive`,
    siteUrl: `https://muhit-archive.netlify.com/`,
    description: `Muhit is a crowdsourced neighbourhood improvement platform`,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
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
        path: './static/data/',
      },
    },
  ]
}
