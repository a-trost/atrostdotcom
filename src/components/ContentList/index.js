import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Transition } from "@headlessui/react";
import ContentCard from "../ContentCard";

const PostContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  margin-top: 40px;
  justify-items: stretch;
  margin-bottom: 40px;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .switch-group {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
  }

  .switch-label {
    margin-right: 0.8em;
    font-size: 0.9em;
    color: #666;
    cursor: pointer;
  }

  .switch {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    height: 1.5em;
    border-radius: 16px;
    width: 2.75em;
    transition: background-color 300ms, box-shadow 300ms;
    border: none;
    cursor: pointer;
    background-color: #ccc;
    &.on {
      background-color: #1384b8;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #18baffcc;
    }
  }

  .thumb {
    display: inline-block;
    margin: 0;
    width: 1em;
    height: 1em;
    background: white;
    border-radius: 50%;
    transition: transform 300ms;
    &.on {
      transform: translateX(1.5em);
    }
    &.off {
      transform: translateX(0.25em);
    }
  }
`;

const ContentList = ({ content, pageTitle }) => {
  const [showAllContent, setShowAllContent] = useState(false);

  return (
    <>
      <HeaderContainer>
        <h1>{pageTitle}</h1>
        <Switch.Group>
          <div className="switch-group">
            <Switch.Label className="switch-label">Show drafts</Switch.Label>
            <Switch
              checked={showAllContent}
              onChange={setShowAllContent}
              className={`${showAllContent ? "on" : "off"} switch`}
            >
              <span className={`${showAllContent ? "on" : "off"} thumb`} />
            </Switch>
          </div>
        </Switch.Group>
      </HeaderContainer>
      <PostContainer>
        {content.map(({ node }) => (
          <Transition
            show={showAllContent || !node.frontmatter.draft}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ContentCard key={node.id} post={node} />{" "}
          </Transition>
        ))}
      </PostContainer>
    </>
  );
};

export default ContentList;
