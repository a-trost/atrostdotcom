module.exports = {
  siteMetadata: {
    title: "Alex Trost - Frontend Web Developer",
    desc:
      "Personal site and blog for Alex Trost, Javascript and Python Web Developer",
  },
  plugins: [
    "gatsby-plugin-react-next",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alex Trost - Front-End Web Developer",
        short_name: "Alex Trost",
        start_url: "/",
        background_color: "#F4F4F4",
        theme_color: "#15B3EA",
        display: "minimal-ui",
        icon: "src/images/base-icon.png",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#15B3EA`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
