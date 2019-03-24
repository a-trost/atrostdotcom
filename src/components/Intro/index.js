import React, { Component } from "react";
import { Link } from "gatsby";

export default class intro extends Component {
  render() {
    return (
      <>
        <p>
          I'm a Front-End web developer in New Haven, Connecticut making fast
          and awesome websites and apps.
        </p>
        <p>
          In past careers I've been a teacher and graphic designer. As a web
          developer I specialize in Javascript libraries like React, and static
          site generators like Gatsby.
        </p>
        <p>
          I work at a great startup in New Haven and co-host{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.overlappodcast.com"
          >
            The Overlap
          </a>
          , a podcast about Design and Web Development.
        </p>
        <p>
          Interested in talking? <Link to="/contact">Reach out</Link>.
        </p>
      </>
    );
  }
}
