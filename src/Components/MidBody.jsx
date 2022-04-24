import React from "react";
import styled from "styled-components";
import card from "../images/card.png";
const MidBody = () => {
  return (
    <>
      <Section>
        <Container>
          <h1>Our Programs</h1>
        </Container>
        <CardsSection>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
          <Cards>
            <CardImg>
              <img src={card} alt="" />
            </CardImg>
            <CardDetails>
              <h3>
                <i class="bx bx-shape-polygon"></i>
                <span> Blockchain</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur perspiciatis labore porro at voluptates dolor modi
                dolore, ab totam soluta!
                <a target="_blank" className="work__button">
                  <i class="bx bxs-right-arrow-circle work__icon"></i>
                </a>
              </p>
            </CardDetails>
          </Cards>
        </CardsSection>
      </Section>
    </>
  );
};

const Section = styled.section`
  font-family: "Satoshi", sans-serif;
`;
const Container = styled.div`
  background: #6842ef;
  /* background: whitesmoke; */
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  color: #fff;
  /* margin: 1vh 0 0 0; */
  /* color: #6842ef; */
`;
const CardsSection = styled.div`
  display: grid;
  margin: 5vh 0 0 11vh;
  padding: 20px;
  grid-gap: 11px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Cards = styled.div`
  width: 85%;
  background-color: #6842ef;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.26);
  margin: 25px 0 0 0;
`;
const CardImg = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0 100%);
  img {
    width: 100%;
    display: block;
    border-radius: 5px 5px 0 0;
  }
`;
const CardDetails = styled.div`
  padding: 20px 10px;

  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    margin: 10px 0 15px 0;
  }

  p {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;

    .work__button {
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      display: flex;
      justify-content: right;
      align-items: center;
      column-gap: 0.25rem;
    }
    .work__button:hover .work__icon {
      transform: translateX(0.3rem);
    }
    .work__icon {
      font-size: 1.3rem;
      transition: 0.4s;
    }
  }
`;

export default MidBody;
