import React from "react";
import styled from "styled-components";
import hod from "../images/hod.jpg";
const Message = () => {
  return (
    <>
      <Section>
        <Container>
          <Textinfo>
            <h1>
              Message from <br /> the <span>HOD</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              molestias nisi doloribus hic ipsum facere tempora similique animi
              culpa obcaecati tenetur laudantium ad veniam rem laborum eius
              eveniet ducimus nesciunt iusto velit, ullam minus? Porro in
              officiis sapiente provident esse debitis voluptatum dolorum maxime
              expedita atque. Sunt enim eius omnis ex. Ut alias rem excepturi
              hic accusamus, illum suscipit veniam deserunt accusantium aliquam
              recusandae consequuntur harum repellendus ullam? Temporibus quas
              similique doloribus alias. Voluptatum ut dignissimos commodi!
              Optio nesciunt quisquam dolore minus? Atque tempore eveniet minus
              quas. Unde reprehenderit distinctio porro facilis assumenda,
              commodi quasi. Ipsam ducimus ea autem! Natus!
            </p>
          </Textinfo>
          <Imginfo>
            <img src={hod} alt="" />
          </Imginfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: #6842ef;
  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  font-family: Satoshi;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
const Textinfo = styled.div`
  width: 65%;
  flex: 0 auto;
  opacity: 1;

  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
  h1 {
    color: white;
    font-size: 50px;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
    color: whitesmoke;
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;
const Imginfo = styled.div`
  width: 25%;
  flex: 0 auto;
  opacity: 1;
  margin: 0 0 0 0;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  img {
    border: 5px solid white;
    width: 100%;
    border-radius: 10px;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 31vh;
      margin-top: 1.5vh;
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
    }
  }
`;
export default Message;
