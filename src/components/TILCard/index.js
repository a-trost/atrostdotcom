import React from "react";
import styled from "styled-components";

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
    padding: 0.25rem 0.5rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  align-items: center;
`;

const Sidebar = styled.div`
  align-self: center;
  flex: 1 130px;
  font-family: Raleway;
  font-weight: 700;
  font-size: 2.4rem;
  color: hsl(0, 0%, 80%);
  text-align: center;
`;

const Card = styled.article`
  box-sizing: border-box;
  border-top: 1px solid #bbb;

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
`;

const Content = styled.article`
  margin-top: 2rem;
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
        <Content
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Card>
    </Container>
  );
}
