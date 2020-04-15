module.exports = {
  siteMetadata: {
    title: `UoA Engineering Revue`,
    description: `The Engineering Revue is an awesome show put on by the University of Auckland Faculty of Engineering.`,
    author: `@UoAEngineeringRevue`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `engineering-revue`,
        short_name: `engrevue`,
        start_url: `/`,
        background_color: `#343a40`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        // icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Trueno"],
          urls: ["src/assets/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
