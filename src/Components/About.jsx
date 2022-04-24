import React from "react";
import styled from "styled-components";
import aboutImg from "../images/about.jpg";
const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Textinfo>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae at magnam, necessitatibus repellendus itaque
              ducimus aut, praesentium vero doloremque, quas in voluptatum
              veniam incidunt soluta harum provident! Voluptatibus dolor a
              eligendi aliquam ipsam tempora illo sequi, qui quam voluptatum eum
              doloribus. Non saepe doloremque ipsam aliquid modi. Atque,
              similique quos. Neque consequuntur nisi dignissimos, molestiae
              provident vitae suscipit ab sequi voluptates voluptatum esse
              molestias cupiditate. Blanditiis velit nesciunt ipsum repellat
              molestiae illum doloremque nulla iusto adipisci temporibus nemo
              sequi veritatis atque voluptates enim, quae non ut dolorum
              voluptatibus dolorem voluptate qui ipsa tempora? Atque cum quis
              praesentium minima, dolor harum exercitationem, maiores ex
              repellendus animi totam itaque ea commodi magni illum a tempora
              saepe, necessitatibus obcaecati perferendis. Itaque vel culpa eius
              iusto tempora, eligendi, perferendis cupiditate inventore ea nihil
              nam magni voluptatum sed ad quibusdam cumque, id veniam error
              nulla? Ab blanditiis eos itaque nobis eaque iste quo recusandae?
            </p>
          </Textinfo>
          <LeftContent>
            <h1>
              About <br /> Faculty of Information Technology
            </h1>
          </LeftContent>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  margin-top: 10vh;
  font-family: Satoshi;
  background: url(${aboutImg}) center/cover no-repeat;
  padding: 50px 5%;
  position: relative;
  height: 90vh;
  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
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
  width: 70%;
  flex: 0 auto;
  opacity: 1;
  position: relative;
  margin-top: 7vh;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  p {
    /* margin-top: 10vh; */
    color: #fff;
    /* width: 100%; */
    font-size: 1rem;
    font-weight: 100;

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
const LeftContent = styled.div`
  width: 100%;
  font-size: 35px;
  color: #fff;
  /* flex: 0 auto; */
  opacity: 1;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
`;
export default About;
