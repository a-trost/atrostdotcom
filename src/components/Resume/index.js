import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

// Holds Category and ResumeItems as children
const CategoryContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex: 1 100%;
  flex-direction: column;
  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;

const CategoryName = styled.div`
  flex-grow: 1;
  min-width: 150px;
  margin: 0 5px 10px 0;
  h3 {
    font-size: 1rem;
    font-weight: 300;
    color: #555;
    text-transform: uppercase;
  }
`;

const CategoryItems = styled.div`
  flex-flow: row wrap;
`;

// Contains ItemInfo and Dates as children
const ResumeItem = styled.div`
  flex: 3 100%;
  display: flex;
  flex-direction: column;
  margin: 0 5px 15px 0;
  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;
// Contains Title, Organization and Description as children
const ItemInfo = styled.div`
  flex-grow: 3;
	padding:0px 5px
  display: flex;
  flex-wrap: wrap;
`;

const Organization = styled.h4`
  color: navy;
  font-weight: 500;
  font-size: 1.3rem;
  flex: 1 100%;
  margin-bottom: 0.4rem;
`;

const Title = styled.h5`
  flex: 1 100%;
  color: #444;
  margin-bottom: 0.8rem;
`;

const Description = styled.div`
  flex: 1 100%;
  line-height: 1.3rem;
  margin-left: 0.8rem;
  span {
    font-weight: bold;
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
  font-weight: 300;
  color: #888;
  text-transform: uppercase;
  line-height: 1rem;
`;

const SectionDivider = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Resume</h2>
        <Container>
          <CategoryContainer>
            <CategoryName>
              <h3>Work Experience</h3>
            </CategoryName>
            <CategoryItems>
              <ResumeItem>
                <ItemInfo>
                  <Organization>
                    CodeSmash - Coding Education for Kids
                  </Organization>
                  <Title>
                    Programming Teacher, Curriculum Designer (2018-Present)
                  </Title>
                  <Description>
                    <ul>
                      <li>
                        Assisted developing curriculum for teaching Scratch
                        programming and Social-Emotional skills to elementary
                        students
                      </li>
                      <li>
                        Trained other teachers and assistants on best practices
                        and concepts
                      </li>
                      <li>
                        Taught 8-11 year olds programming basics and emotional
                        intelligence skills
                      </li>
                    </ul>
                  </Description>
                </ItemInfo>
                <Dates>2018-Present</Dates>
              </ResumeItem>
              <ResumeItem>
                <ItemInfo>
                  <Organization>Booker T. Washington Academy</Organization>
                  <Title>2nd Grade Teacher, Team Lead</Title>
                  <Description>
                    <ul>
                      <li>
                        Managed classrooms of 19 students with diverse academic
                        abilities
                      </li>
                      <li>
                        Designed and implemented school-wide curriculum and
                        procedures
                      </li>
                      <li>Managed team of 7 educators</li>
                      <li>
                        Developed web app to provide solutions for student,
                        teacher and administrator problems, used daily by 20+
                        teachers and 300 students
                      </li>
                      <li>
                        Created fliers, posters, brochures, videos and
                        photography to promote school brand
                      </li>
                    </ul>
                  </Description>
                </ItemInfo>
                <Dates>2015-2018</Dates>
              </ResumeItem>
              <ResumeItem>
                <ItemInfo>
                  <Organization>Freelance</Organization>
                  <Title>Graphic Designer</Title>
                  <Description>
                    <ul>
                      <li>
                        Created branding for clients through logos, brochures,
                        business cards, websites, and advertisements
                      </li>
                    </ul>
                  </Description>
                </ItemInfo>
                <Dates>2007-2011</Dates>
              </ResumeItem>
            </CategoryItems>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryName>
              <h3>Projects</h3>
            </CategoryName>
            <CategoryItems>
              <ResumeItem>
                <ItemInfo>
                  <Organization>The Best Reviews</Organization>
                  <Title>
                    Review App with Google Maps, Foursquare and ridiculous
                    rhymes.
                  </Title>
                  <Description>
                    <p>
                      Map based progressive web app that generates parody
                      reviews based on user-given locations.
                    </p>

                    <p>
                      <span>Technologies:</span> React, Redux, JavaScript,
                      Google Maps API, Foursquare API
                    </p>
                  </Description>
                </ItemInfo>
                <Dates>June 2018</Dates>
              </ResumeItem>
            </CategoryItems>
          </CategoryContainer>
        </Container>
      </React.Fragment>
    );
  }
}
