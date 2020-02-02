import React from "react";
import isPresent from "is-present";
import { Styled, Box } from "theme-ui";
import { Link } from "gatsby";
import { Folder } from "react-feather";

export default ({ directories }) =>
  isPresent(directories) ? (
    <>
      <Box
        py={3}
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          flexFlow: `column`,
          marginLeft: `2rem`,
        }}
      >
        {Object.entries(directories)
          .sort(alphabetize)
          .map(([key, value]) => (
            <Styled.a
              as={Link}
              key={key}
              to={value[0].pagePath}
              style={{ marginRight: `1.5rem`, marginBottom: `1rem` }}
            >
              <Box
                w={[1, 2, 2]}
                p={3}
                key={key}
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <Folder style={{ marginRight: `.5rem` }} />
                <span>{key}</span>
                <span
                  style={{
                    fontSize: `12px`,
                    marginLeft: `.75rem`,
                    letterSpacing: `1px`,
                  }}
                >
                  ({value.length})
                </span>
              </Box>
            </Styled.a>
          ))}
      </Box>
      <hr />
    </>
  ) : null;

const alphabetize = ([a, ...aProperties], [b, ...bProperties]) => {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  return 0;
};
