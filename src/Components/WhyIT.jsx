import React from "react";
import styled from "styled-components";
const WhyIT = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>
            <h1>
              Why <span>Information Technology </span>?
            </h1>
          </Heading>
          <Content>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
            <Information>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi provident optio aliquam voluptates ex eum a omnis
                nihil atque!
              </p>
            </Information>
          </Content>
        </Container>
      </Section>
    </>
  );
};
const Section = styled.section`
  height: 70vh;

  /* background: #e4e4e4; */
`;
const Container = styled.div`
  font-family: Satoshi;
`;
const Heading = styled.div`
  margin: 10vh 0 0 0;
  text-align: center;
  font-size: 40px;
  span {
    color: #6842ef;
  }
`;
const Content = styled.div`
  /* width: 80%; */
  display: grid;
  gap: 15px 15px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 10vh;
`;
const Information = styled.div`
  background: #6842ef;
  color: whitesmoke;
  font-weight: 200;
  padding: 20px;
  border-radius: 5px;
`;

export default WhyIT;
