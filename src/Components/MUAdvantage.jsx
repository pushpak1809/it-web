import React from "react";
import styled from "styled-components";
import card from "../images/cell.jpg";
const MUAdvantage = () => {
  return (
    <>
      <Section>
        <Container>
          <Text>
            <h1>
              <span>MU Advantage</span>
            </h1>
          </Text>
          <Cells>
            <SingleCell>
              <img src={card} alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </SingleCell>
            <SingleCell>
              <img src={card} alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </SingleCell>
            <SingleCell>
              <img src={card} alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </SingleCell>
            <SingleCell>
              <img src={card} alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </SingleCell>
          </Cells>
          <More>
            <a href="">More</a>
          </More>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  height: 85vh;
`;
const Container = styled.div`
  margin: 80px 0 0 0;
`;
const Text = styled.div`
  h1 {
    text-align: center;
    font-family: Satoshi;
    font-size: 50px;
    span {
      padding: 10px;
      border: 5px solid #6842ef;
      border-radius: 10px;
    }
  }
`;
const Cells = styled.div`
  margin: 80px 0 0 0;
  display: grid;
  gap: 25px 0px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const SingleCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 60%;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 5); */
    border-radius: 10px;

    &:hover {
      transform: scale(90%);
      border: 5px solid #6842ef;
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  }
  p {
    font-family: Satoshi;
    font-weight: bold;
    margin: 5px;
  }
`;
const More = styled.div`
  margin: 50px 0 0 0;
  text-align: center;
  a {
    padding: 5px 25px;
    color: whitesmoke;
    background: #6842ef;
    font-family: Satoshi;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export default MUAdvantage;
