const config = {
  siteTitle: "Alex Trost - Web Developer",
  siteTitleShort: "Alex Trost",
  siteTitleAlt: "Alex Trost - Front-End Web Design",
  siteLogo: "/src/images/logo-1024.png",
  siteUrl: "https://www.atrost.com",
  pathPrefix: "",
  siteDescription:
    "Alex Trost is a Frontend Web Developer living in New Haven, Connecticut. He writes about Javascript, React, Gatsby, and general productivity.",
  siteRss: "/rss.xml",
  siteFBAppID: "",
  googleAnalyticsID: "UA-117091035-1",
  disqusShortname: "",
  postDefaultCategoryID: "Programming",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "DD/MM/YYYY",
  userName: "Alex",
  userEmail: "alexrtrost@gmail.com",
  userTwitter: "@trostcodes",
  userLocation: "New Haven, CT",
  userDescription:
    "Alex Trost is a Frontend Web Developer living in New Haven, Connecticut. He writes about Javascript, React, Gatsby, and general productivity.",
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/trostcodes",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "alexrtrost@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2020. Alex Trost",
  themeColor: "#c62828",
  backgroundColor: "#e0e0e0",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
