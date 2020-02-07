module.exports = {

  siteMetadata: {
    title: `Muhit Archive`,
    siteUrl: `https://muhit.co`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-64998421-1",
        head: true,
      }
    }
  ]
}
