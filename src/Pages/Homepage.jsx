import { Container, Row, Col } from "react-bootstrap"

import HeroImage from "../assets/tju-logo1.webp"

import frame1 from "../assets/bussec/Frame 1.webp"
import frame2 from "../assets/bussec/Frame 2.webp"
import frame3 from "../assets/bussec/Frame 3.webp"
import frame4 from "../assets/bussec/Frame 4.webp"
import frame5 from "../assets/bussec/Frame 5.webp"
import frame6 from "../assets/bussec/Frame 6.webp"

import Qr1 from "../assets/summary/Qr1.webp"
import Qr2 from "../assets/summary/Qr2.webp"
import Qr3 from "../assets/summary/Qr3.webp"
import Qr4 from "../assets/summary/Qr4.webp"
import Qr5 from "../assets/summary/Qr5.webp"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Homepage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="homepage">

      {/* header */}
      <header className="w-100 overflow-hidden pb-0">
        <Container>
          <Row className="row-cols-lg-2 row-cols-1 px-2">
            <Col>
              <img src={HeroImage} alt="" className="heroimage"/>
            </Col>
            <Col>
              <p className="herotext fw-bolder text-uppercase text-white">
              Welcome to PT . TANGKAL JATI UTAMA Indonesia, your perfect choice for high quality engineering & construction. As one of Indonesia’s Engineering And Construction Company, we continuously improve our strategy to create the highest level of customer's satisfaction. We conduct a series of construction method research, design & development program to construct a business as well as services in which placing sustainability in the top priority. The collaboration between Indonesian selected workmaship skill’s people and client, to balance our business activities and social responsibilities. Our experience in the engineering, procurement & construction (epc) of civil, mechanical, electrical and instrumentation industry has build a strong character in sustaining and steering our business activities. We keep maintaining growth positively in a balance business culture. Customer's satisfaction is our priority and our team will happily work together with you to built a sustainable and mutual business relationship. Hard work, innovative, creative and continuous improvement are the values that we apply to every element of our business as well as our services. In order to achieve our business succeed, we realize that society satisfaction should be prioritized by providing good quality services, excellent customer's satisfaction, and maximizing positive impact for environment. The strong collaboration will lead to achieve that vision. <br/>We are looking forward to be your strategic business partner.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* about us */}
      <div className="w-100 min-vh-100" id="Aboutus">
        <Container>
          <Row>
            <Col>
              <h1 className="title mb-5 text-uppercase">About Us</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-white fw-bold">
                <p>Place, Date established &nbsp; : Jakarta, June 03, 2022 </p>
                <p>Type of business &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Engineering & Construction </p>
                <p>Commissioner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : JON BAHRUM MUHID (Mr.) </p>
                <p>President Director &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : RAHMAD HANAFI (Mr.) </p>
                <p>Market Established &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : National </p>
                <p>Payment Terms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Down Payment & Progress Payment </p>
                <p>Business License &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 03062200586790005</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* mission vision */}
      <div className="w-100 min-vh-100" id="Mission">
        <Container>
          <Row>
            <Col>
              <h1 className="title mb-2 text-uppercase">Mission</h1>
              <ul className="text-white fw-bold">
                <li>Maintaining intensive communication along with valuable business partners to increase business acceleration and create a long term mutual business relationship.</li>
                <li>Conducting a continuous program of Research, Design And Development program to create a sustainable business concept.</li>
                <li>Continuously developing original design products.</li>
                <li>Exploring and maximizing the use of new knowledge, design and construction method.</li>
                <li>Managing the human resources professionally.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="title mb-2 text-uppercase">Vision</h1>
              <ul className="text-white fw-bold">
                <li>Being the leading role in Engineering, Procurement And Construction Company which combining Indonesian selected workmanship, clients, legals and with a continuous Research of Construction method, Design & Development program.</li>
                <li>Bringing the excellence of Indonesian workmanship to win the global competition in EPC industry.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* business sector */}
      <div className="w-100 min-vh-100" id="Bussec">
        <Container>
          <Row>
            <Col>
              <h1 className="title mb-5 text-uppercase">Business Sector</h1>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 g-5 photo mx-auto">
            <Col>
              <img src={frame1} alt="Operation & Maintenance Service" />
            </Col>
            <Col>
              <img src={frame2} alt="Civil Construction" />
            </Col>
            <Col>
              <img src={frame3} alt="Electrical & Instrumental Construction/Instalation" />
            </Col>
            <Col>
              <img src={frame4} alt="Mechanical Construction/Instalation" />
            </Col>
            <Col>
              <img src={frame5} alt="Engineering Design" />
            </Col>
            <Col>
              <img src={frame6} alt="Project Management Service" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* summary */}
      <div className="w-100" id="Summary">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide className="slide1">
            <Container>
              <Row>
                <h1 className="text-white fw-bold">Rehabilitation of the heritage fort <br/> Van Den Bosch area</h1>
                <p className="text-white fw-semibold">Ngawi, Jawa Barat</p>
              </Row>
              <Row className="mt-3">
                <img className="Qr" src={Qr1} alt="" />
                <p className="text-white fw-semibold mt-3">Scan to see more info about this project.</p>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <Container>
              <Row>
                <h1 className="text-white fw-bold">Building Renovation</h1>
                <p className="text-white fw-semibold">PLBN, Kalimantan Barat</p>
              </Row>
              <Row className="mt-3">
                <img className="Qr" src={Qr2} alt="" />
                <p className="text-white fw-semibold mt-3">Scan to see more info about this project.</p>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <Container>
              <Row>
                <h1 className="text-white fw-bold">Building Renovation</h1>
                <p className="text-white fw-semibold">RSUD Pondok betung, Tangerang selatan</p>
              </Row>
              <Row className="mt-3">
                <img className="Qr" src={Qr3} alt="" />
                <p className="text-white fw-semibold mt-3">Scan to see more info about this project.</p>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <Container>
              <Row>
                <h1 className="text-white fw-bold">Villa Construction</h1>
                <p className="text-white fw-semibold">Villa Tapos, Bogor</p>
              </Row>
              <Row className="mt-3">
                <img className="Qr" src={Qr4} alt="" />
                <p className="text-white fw-semibold mt-3">Scan to see more info about this project.</p>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="slide5">
            <Container>
              <Row>
                <h1 className="text-white fw-bold">Building Renovation</h1>
                <p className="text-white fw-semibold">Museum Nasional, Jakarta</p>
              </Row>
              <Row className="mt-3">
                <img className="Qr" src={Qr5} alt="" />
                <p className="text-white fw-semibold mt-3">Scan to see more info about this project.</p>
              </Row>
            </Container>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Homepage