import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { CONTACT_NUMBER, CONTACT_EMAIL } from "../constants";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Navigation]);

const HomeBanner = ({ images }) => {
  const imgs = images.map((img) => getImage(img));
  console.log(imgs);
  const sendMail = (e) => {
    fetch("https://real-value-sendmail-api.herokuapp.com/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: "Someone Clicked on call now button on real value website.",
        text: "Someone clicked on call now button on real value website.",
        toEmails: [CONTACT_EMAIL]
      })
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Swiper
        // direction="horiontal"
        // modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imgs.map((image, index) => (
          <SwiperSlide key={index}>
            <GatsbyImage image={image} alt="" style={{ height: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      {/* <Body>
        <BodyWrapper>
          <Button onClick={sendMail}>
            <a href={`tel:${CONTACT_NUMBER}`}>call now</a>
          </Button>
        </BodyWrapper>
      </Body> */}
      <Button onClick={sendMail}>
        <a href={`tel:${CONTACT_NUMBER}`}>call now</a>
      </Button>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  position: relative;
  /* min-height: 400px; */
  width: 100vw;
  @media (min-width: 750px) {
    /* min-height: 550px; */
    text-align: center;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  div {
    max-width: 100vw !important;
    width: 100vw !important;
  }
`;
const Body = styled.div`
  width: 140px;
  height: 65px;
  position: absolute;
  z-index: 100;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;
const BodyWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;
const Heading = styled.h1`
  color: white;
  margin-bottom: 10px;
  @media (min-width: 750px) {
    font-size: 50px;
  }
`;
const Para = styled.p`
  color: white;
  margin: 0 0 15px 0;
  @media (min-width: 750px) {
    font-size: 18px;
    max-width: 750px;
    margin: 0 auto 15px;
  }
`;
const Button = styled.button`
  display: block;
  margin: 30px auto 10px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  width: 150px;
  border: none;
  border-radius: 25px;
  overflow: hidden;
  padding: 0;
  @media (min-width: 750px) {
    width: 220px;
  }
  & > a {
    /* background: linear-gradient(0deg, #3fa200, #00ff08); */
    background: #024562;
    color: white;
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
    padding: 10px;
    @media (min-width: 750px) {
      padding: 15px;
    }
  }
`;
