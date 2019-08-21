require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Alex Trost - Frontend Web Developer",
    desc:
      "Alex Trost is a Frontend Web Developer living in New Haven, Connecticut. He writes about Javascript, React, Gatsby, and general productivity.",
    siteUrl: `https://atrost.com`,
    image: "",
    social: {
      twitter: "@mistertrost",
      linkedin: "mrtrost",
      github: "a-trost",
    },
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
        contentPath: "src/notes",
        homeText: "Home",
        breadcrumbSeparator: ">",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "atrost",
        accessToken: process.env.PRISMIC_SECRET_KEY,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ulvxp23ybtje`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/contact-thanks/"],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
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
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feeds.buzzsprout.com/255972.rss`, // Overlap
        name: `OverlapPodcast`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: false,
              withWebp: true,
              wrapperStyle: "div",
              quality: 90,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-remark-copy-linked-files",
    "gatsby-remark-smartypants",
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://atrost.com",
        sitemap: "https://atrost.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117091035-1",
        head: false,
        respectDNT: true,
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
    `gatsby-plugin-offline`,
  ],
};
