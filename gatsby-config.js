module.exports = {
  siteMetadata: {
    title: "Alex Trost - Frontend Web Developer",
    desc:
      "Alex Trost is a Frontend Web Developer living in New Haven, Connecticut. He writes about Javascript, React, Gatsby, the web, productivity and more.",
    siteUrl: `https://atrost.com`,
    image: "",
    social: {
      twitter: "@mistertrost",
      linkedin: "mrtrost",
      github: "a-trost",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              withWebp: true,
              wrapperStyle: "div",
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
