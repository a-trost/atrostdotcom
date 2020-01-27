import React from "react";
import Helmet from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import favicon16 from "../../../src/images/favicon16.png";
import favicon32 from "../../../src/images/favicon32.png";
import favicon64 from "../../../src/images/favicon64.png";
import atrostLogo from "../../../src/images/logo-2048.png";
import alexHeadshot from "../../../src/images/alexheadshot.jpg";
import parse from "date-fns/parse";

export default ({ postNode, postPath, postSEO, aboutSEO }) => {
  let title;
  let description;
  let datePublished;
  let image = atrostLogo;
  let postURL;
  const headshotImage = urljoin(config.siteUrl, alexHeadshot);
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    postURL = urljoin(config.siteUrl, postPath);
    const datePublishedObject = parse(
      postNode.frontmatter.date,
      "MMMM do, yyyy",
      new Date()
    );
    datePublished = datePublishedObject.toISOString();
    image = urljoin(
      config.siteUrl,
      postNode.frontmatter.image.childImageSharp.sizes.src
    );
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = urljoin(config.siteUrl, image);
  }

  const blogURL = config.siteUrl;
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        author: {
          "@type": "Person",
          name: config.userName,
          url: config.siteUrl,
        },
        creator: {
          "@type": "Person",
          name: config.userName,
          url: config.siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: config.userName,
          url: config.siteUrl,
          logo: {
            "@type": "ImageObject",
            url: atrostLogo,
            width: "400",
            height: "400",
          },
        },
        datePublished,
        dateModified: datePublished,
        name: title,
        mainEntityOfPage: "True",
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      }
    );
  }
  if (aboutSEO) {
    schemaOrgJSONLD.push({
      "@context": "http://www.schema.org",
      "@type": "person",
      name: config.userName,
      disambiguatingDescription: "Web Developer, Teacher, Designer",
      description: "Front-End Web Developer",
      jobTitle: "Engineer",
      height: "75 inches",
      gender: "male",
      image: headshotImage,
      url: config.siteUrl,
      address: {
        "@type": "PostalAddress",
        addressRegion: "CT",
        addressCountry: "United States",
      },
      email: config.userEmail,
      birthDate: "1987-06-20",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Temple University",
          sameAs: "https://www.temple.edu",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Udacity",
        },
      ],
      birthPlace: "Philadelphia",
      sameAs: [
        "https://codepen.io/a-trost/",
        "https://twitter.com/trostcodes",
        "https://instagram.com/alextrost",
        "https://www.linkedin.com/in/trostcodes/",
        "https://github.com/a-trost",
      ],
    });
  }
  return (
    <Helmet
      title={title}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
      ]}
    >
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* 
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}

      <meta name="title" content={config.siteTitle} />
      <meta name="description" content={config.siteDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={config.siteUrl} />
      <meta property="twitter:title" content={config.siteTitle} />
      <meta property="twitter:description" content={config.siteDescription} />
      <meta property="twitter:image" content={image} />
      <html lang="en" />
    </Helmet>
  );
};
