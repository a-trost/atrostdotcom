import React from "react";

import Notes from "../components/notes";
import SEO from "../../components/SEO";

export default ({
  pageContext: { groupedNotes, urls, breadcrumbs, siteTitle },
  ...props
}) => (
  <>
    <SEO />
  <Notes
    directories={groupedNotes}
    files={urls}
    breadcrumbs={breadcrumbs}
    siteTitle={siteTitle}
    {...props}
  />
  </>
);
