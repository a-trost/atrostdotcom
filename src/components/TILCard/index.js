import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 140px auto;
  align-items: center;
  @media all and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  align-self: center;
  font-family: Raleway;
  font-weight: 700;
  font-size: 2.4rem;
  color: hsl(0, 0%, 80%);
  text-align: center;
  border-right: 1px solid hsla(0, 0%, 0%, 0.2);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 700px) {
    padding-bottom: 3rem;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
    border-right: 1px solid hsla(0, 0%, 0%, 0);
  }
`;

const Card = styled.article`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  padding-top: 4rem;
  h2 {
    margin-bottom: 0;
  }
  .date {
    font-size: 13px;
    color: #888;
    margin: 0.5rem 1rem;
  }
  .content {
    margin-top: 2rem;
  }
  @media all and (max-width: 700px) {
    padding: 2rem 0;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  .label {
    font-size: 13px;
    color: #aaa;
  }
  .tag {
    line-height: 1;
    background: #ebebeb;
    border-radius: 1rem;
    font-size: 14px;
    margin: 0;
    color: #666;
    margin-left: 0.5rem;
    padding: 8px 15px;
  }
`;

export default function TILCard(props) {
  const { content, title, date, tags, number } = props;
  return (
    <Container className="til-card">
      <Sidebar>#{number}</Sidebar>
      <Card>
        <h2>{title}</h2>
        <p class="date">{date}</p>
        <Tags>
          <span className="label">TAGS: </span>
          {tags.map(tag => (
            <span className="tag">{tag}</span>
          ))}
        </Tags>
        <article
          className="content"
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Card>
    </Container>
  );
}
