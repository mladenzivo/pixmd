import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "../../assets/scss/plugins/extensions/swiper.scss";

import img1 from "../../assets/img/slider/Image1.png";
import img2 from "../../assets/img/slider/Image2.png";
import img3 from "../../assets/img/slider/Image3.png";

const params = {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
}

class LandingPage extends React.Component {
  render = () => {
    return (
      <Container className="landing-page">
        <div className="summary text-center">
          <h1 className="summary-title">{`BrowserBefore & After Photos`}</h1>
          <div className="description">
            <p>Welcome to the easiest way to explore the before and after photos of plastic surgeons.</p>
            <p>Follow you favorites, ask questions and book an appointment</p>
          </div>
          <Row className="justify-content-center">
            <Col className="text-center" md={2}>
              <Button.Ripple color="info">GET STARTED</Button.Ripple>
            </Col>
            <Col className="text-center" md={2}>
              <Button.Ripple outline color="info">LEARN MORE</Button.Ripple>
            </Col>
          </Row>
        </div>
        <div className="slider w-100 mb-5">
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
