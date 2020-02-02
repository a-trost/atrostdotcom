import React from "react";
import isPresent from "is-present";
import DirectoryList from "./directory-list";
import FileList from "./file-list";
import Breadcrumbs from "./breadcrumbs";
import Layout from "./layout";

export default ({
  directories,
  files,
  breadcrumbs = [],
  siteTitle,
  ...props
}) => {
  console.log(files);
  return (
    <Layout {...props} title={siteTitle}>
      <h1>Notes</h1>
      <p>
        These aren't polished in any way. Some are reference pages where I want
        to capture something for later. Most are notes taken while learning a
        skill or reading a book.
      </p>
      {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
      <DirectoryList directories={directories} />
      {!isPresent(directories) && <FileList files={files} />}
    </Layout>
  );
};
