import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "../../assets/scss/plugins/extensions/swiper.scss";

import img1 from "../../assets/img/slider/Image1.png";
import img2 from "../../assets/img/slider/Image2.png";
import img3 from "../../assets/img/slider/Image3.png";
import img4 from "../../assets/img/slider/banner-34.jpg";
import img5 from "../../assets/img/slider/banner-35.jpg";
import img6 from "../../assets/img/slider/banner-36.jpg";
import img7 from "../../assets/img/slider/banner-37.jpg";
import img8 from "../../assets/img/slider/banner-38.jpg";

const params = {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};

class LandingPage extends React.Component {
  render = () => {
    return (
      <Container className="landing-page">
        <div className="summary text-center">
          <h1 className="summary-title">{`BrowserBefore & After Photos`}</h1>
          <div className="description">
            <p>
              Welcome to the easiest way to explore the before and after photos
              of plastic surgeons.
            </p>
            <p>Follow you favorites, ask questions and book an appointment.</p>
          </div>
          <Row className="justify-content-center mb-2">
            <Col className="text-center m-2" md={2}>
              <Button.Ripple color="info">GET STARTED</Button.Ripple>
            </Col>
            <Col className="text-center m-2" md={2}>
              <Button.Ripple outline color="info">
                LEARN MORE
              </Button.Ripple>
            </Col>
          </Row>
        </div>
        <div className="slider mb-2 p-2">
          <Swiper {...params}>
            <div>
              <img src={img1} alt="swiper 1" className="img-fluid" />
            </div>
            <div>
              <img src={img2} alt="swiper 2" className="img-fluid" />
            </div>
            <div>
              <img src={img3} alt="swiper 3" className="img-fluid" />
            </div>
            <div>
              <img src={img4} alt="swiper 4" className="img-fluid" />
            </div>
            <div>
              <img src={img5} alt="swiper 5" className="img-fluid" />
            </div>
            <div>
              <img src={img6} alt="swiper 6" className="img-fluid" />
            </div>
            <div>
              <img src={img7} alt="swiper 7" className="img-fluid" />
            </div>
            <div>
              <img src={img8} alt="swiper 8" className="img-fluid" />
            </div>
          </Swiper>
        </div>
        <div className="text-center">
          <Button className="get-started">Get Started</Button>
        </div>
      </Container>
    );
  };
}

export default LandingPage;
