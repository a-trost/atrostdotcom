import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-template-columns: 10rem 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  margin: 0 -1rem;
  margin-bottom: 50px;
  padding: 2rem 1rem;
  display: block;

  @media all and (min-width: 800px) {
    display: grid;
  }
`;

// Holds Category and ResumeItems as children
// const CategoryContainer = styled.div`
//   margin-bottom: 1rem;
//   display: flex;
//   flex: 1 100%;
//   flex-direction: column;
//   @media all and (min-width: 800px) {
//     flex-direction: row;
//   }
// `;

const CategoryName = styled.div`
  flex-grow: 1;
  min-width: 150px;
  margin: 0 5px 10px 0;

  @media all and (min-width: 800px) {
    margin: 0 5px 10px 0;
    border: 0;
  }

  h3 {
    font-size: 1rem;
    font-variation-settings: var(--font-light);
    color: #555;
    text-transform: uppercase;
    margin-top: 0;
  }
`;

const CategoryItems = styled.div`
  flex-flow: row wrap;
  margin-bottom: 6rem;
`;

// Contains ItemInfo and Dates as children
const ResumeItem = styled.div`
  flex: 3 100%;
  display: flex;
  flex-direction: column;
  margin: 0 5px 1.75rem 0;
  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;
// Contains Title, Organization and Description as children
const ItemInfo = styled.div`
  flex-grow: 3;
  padding: 0px 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Organization = styled.h4`
  color: navy;
  font-variation-settings: var(--font-medium);
  font-size: 1.3rem;
  flex: 1 100%;
  margin-bottom: 0.4rem;
  margin-top: 0;
`;

const Title = styled.span`
  flex: 1 100%;
  font-size: 16px;
  color: #444;
  margin-bottom: 0.8rem;
`;

const Description = styled.div`
  flex: 1 100%;
  line-height: 1.3rem;
  margin-left: 0.8rem;
  span {
    font-variation-settings: var(--font-bold);
  }
  ul {
    margin: 0;
    list-style: none;
    li {
      margin: 15px 2px;
    }
  }
`;

const Dates = styled.div`
  text-align: right;
  flex-grow: 1;
  min-width: 150px;
  font-size: 0.8rem;
  font-variation-settings: var(--font-light);
  color: #888;
  text-transform: uppercase;
  line-height: 1rem;
`;

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <CategoryName>
            <h3>Work Experience</h3>
          </CategoryName>
          <CategoryItems>
            <ResumeItem>
              <ItemInfo>
                <Organization>Digital Surgeons</Organization>
                <Title>Engineer</Title>
                <Description>
                  <ul>
                    <li>
                      Created and added features to Gatsby and Next.js
                      applications
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Aug 2019-Present</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>Green Check Verified</Organization>
                <Title>Software Engineer</Title>
                <Description>
                  <ul>
                    <li>Created new features in Angular application</li>
                    <li>
                      Carried out user testing and implemented UX improvements
                    </li>
                    <li>
                      Responsible for making app responsive and developing
                      design system
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Dec 2018-Sep 2019</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>GoNation</Organization>
                <Title>Frontend Web Developer</Title>
                <Description>
                  <ul>
                    <li>Worked across varied stack of PHP, React, and Node</li>
                    <li>Created features used across 240+ websites</li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Aug-Dec 2018</Dates>
            </ResumeItem>
          </CategoryItems>

          <CategoryName>
            <h3>Projects</h3>
          </CategoryName>
          <CategoryItems>
            <ResumeItem>
              <ItemInfo>
                <Organization>Frontend Horse</Organization>
                <Title>
                  A frontend newsletter that teaches the techniques of excellent
                  web developers
                </Title>
                <Description>
                  <ul>
                    <li>
                      <a
                        href="https://frontend.horse"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {">"} View Website
                      </a>
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>May 2020</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>The Best Reviews</Organization>
                <Title>
                  Review App with Google Maps, Foursquare and ridiculous rhymes.
                </Title>
                <Description>
                  <ul>
                    <li>
                      Map based progressive web app that generates parody
                      reviews based on user-given locations.
                    </li>
                    <li>
                      <span>Technologies:</span> React, Redux, JavaScript,
                      Google Maps API, Foursquare API, React-Router
                    </li>
                    <li>
                      <a
                        href="https://bestreviews.atrost.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        > View Project
                      </a>
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Jun 2018</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>Alexandria</Organization>
                <Title>React Book tracking app with search</Title>
                <Description>
                  <ul>
                    <li>
                      Progressive web app that uses a book API to search, and
                      allows users to track books "read", "want to read" and
                      "reading."
                    </li>
                    <li>
                      <span>Technologies: </span> React, JavaScript,
                      Material-UI, React-Router
                    </li>
                    <li>
                      <a
                        href="https://alexandria.atrost.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        > View Project
                      </a>
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Apr 2018</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>Newton</Organization>
                <Title>EdTech app for teachers and students.</Title>
                <Description>
                  <ul>
                    <li>
                      Full Stack web app that makes teachers more efficient and
                      motivates kids to learn.
                    </li>
                    <li>
                      Makes test data actionable for both teachers and students.
                      Gives teachers insight on their data, and helps them to
                      differentiate instruction so every student grows. Gamifies
                      the learning process so that students unlock stickers,
                      badges and avatars for hard work and growth.
                    </li>
                    <li>
                      In first year, students reached the ninety-ninth
                      percentile for growth on their year-end Math assessment.
                    </li>
                    <li>
                      <span>Technologies: </span>
                      Python, Django, Foundation, Webscraping, Mailgun,
                      Posgresql, Nginx, Selenium, Illustrator, Photoshop
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>2015-2018</Dates>
            </ResumeItem>
          </CategoryItems>
          <CategoryName>
            <h3>Education</h3>
          </CategoryName>
          <CategoryItems>
            <ResumeItem>
              <ItemInfo>
                <Organization>Frontend Web Developer Nanodegree</Organization>
                <Title>Udacity</Title>
                <Description>
                  <ul>
                    <li>Google Developer Challenge Scholarship Recipient</li>
                    <li>
                      <a
                        href="https://confirm.udacity.com/XLDCHTKA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        > View Certificate
                      </a>
                    </li>
                  </ul>
                </Description>
              </ItemInfo>
              <Dates>Jul 2018</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>
                  Bachelor of Science in Early Childhood Education
                </Organization>
                <Title>Temple University, Philadelphia, PA</Title>
              </ItemInfo>
              <Dates>Dec 2014</Dates>
            </ResumeItem>
            <ResumeItem>
              <ItemInfo>
                <Organization>Associate of Arts in Graphic Design</Organization>
                <Title>Bucks County Community College, Newtown, PA</Title>
              </ItemInfo>
              <Dates>Jan 2009</Dates>
            </ResumeItem>
          </CategoryItems>
        </Container>
      </React.Fragment>
    );
  }
}
