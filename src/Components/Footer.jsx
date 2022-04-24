import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>
            <h1>Bank on us. Will treasure your vote.</h1>
          </Heading>
          <Content>
            <Box className="first">
              <a href="">
                <ul>
                  Enroll With Us
                  <a href="">
                    <li>How To Apply</li>
                  </a>
                  <a href="">
                    <li>National Admissions</li>
                  </a>
                  <a href="">
                    <li>International Admissions</li>
                  </a>
                  <a href="">
                    <li>Admission Offices</li>
                  </a>
                  <a href="">
                    <li>Student Welfare</li>
                  </a>
                  <a href="">
                    <li>Student Welfare</li>
                  </a>
                  <a href="">
                    <li>Student Welfare</li>
                  </a>
                </ul>
              </a>
            </Box>
            <Box className="second">
              <a href="">
                <ul>
                  Learn with Us
                  <a href="">
                    <li>Programs</li>
                  </a>
                  <a href="">
                    <li>Faculties</li>
                  </a>
                  <a href="">
                    <li>Teaching Practices</li>
                  </a>
                  <a href="">
                    <li>Research & Innovation</li>
                  </a>
                  <a href="">
                    <li>Entrepreneurship</li>
                  </a>
                  <a href="">
                    <li>Libraries</li>
                  </a>
                  <a href="">
                    <li>System Support</li>
                  </a>
                </ul>
              </a>
            </Box>
            <Box className="third">
              <a href="https://www.google.com/">
                <ul>
                  Grow with Us
                  <a href="https://www.google.com/">
                    <li>Placements</li>
                  </a>
                  <a href="">
                    <li>Career Development</li>
                  </a>
                  <a href="">
                    <li>Armed Forces Motivaitonal Cell</li>
                  </a>
                  <a href="">
                    <li>International Relations Cell</li>
                  </a>
                  <a href="">
                    <li>Social Responsiveness</li>
                  </a>
                  <a href="">
                    <li>Culture at MU</li>
                  </a>
                  <a href="">
                    <li>Awards and Ranking</li>
                  </a>
                </ul>
              </a>
            </Box>
            <Box className="fourth">
              <a href="https://www.google.com/">
                <ul>
                  Connect With Us
                  <a href="https://www.google.com/">
                    <li>Contact Us</li>
                  </a>
                  <a href="">
                    <li>Admission Helpline</li>
                  </a>
                  <a href="">
                    <li>Visit Us</li>
                  </a>
                  <a href="">
                    <li>Student MIS</li>
                  </a>
                  <a href="">
                    <li>MU Mirror</li>
                  </a>
                  <a href="">
                    <li>Exam Corner</li>
                  </a>
                  <a href="">
                    <li>Tenders</li>
                  </a>
                </ul>
              </a>
            </Box>
          </Content>

          <Social>
            <h5>Connect with Us</h5>
            <div>
              <a href="">
                <i class="bx bxl-facebook-square"></i>
              </a>
              <a href="">
                <i class="bx bxl-instagram-alt"></i>
              </a>
              <a href="">
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a href="">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="">
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
            <i class="bx bxs-phone   div-i">+91-2668-260201</i>
            <i class="bx bxs-envelope  div-i">
              admissions@medicapsuniversity.ac.in
            </i>
          </Social>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.footer`
  height: 100vh;
  background: #6843ef;
`;
const Container = styled.div``;
const Heading = styled.div`
  text-align: center;
  font-family: Satoshi;
  h1 {
    text-transform: uppercase;
    color: #fff;
    padding: 25px;
    border-bottom: 5px solid #fff;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0 0 0;

  .first,
  .second,
  .third,
  .fourth {
    border-left: 3px solid whitesmoke;
    padding: 0 0 0 25px;
  }
`;
const Box = styled.div`
  font-family: Satoshi;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    color: #fff;
    font-weight: bold;
  }
  li {
    margin: 5px 0 0 0;
    font-weight: normal;
    color: lightgrey;
  }
`;

const Social = styled.div`
  margin: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Satoshi;
  color: #fff;
  h5 {
    font-size: 20px;
  }
  div {
    cursor: pointer;
    font-size: 30px;
    a {
      color: #fff;
      &:hover {
        color: lightgrey;
      }
    }
    i {
      padding: 10px;
    }
  }
  .div-i {
    font-weight: bold;
    padding: 5px;
  }
`;
export default Footer;
