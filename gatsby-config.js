module.exports = {

  siteMetadata: {
    title: `Muhit - Co-creating better cities`,
    siteUrl: `https://muhit.co`,
    description: `Muhit was a crowdsourced neighbourhood improvement platform, active as a non-profit from 2015-2018`,
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
