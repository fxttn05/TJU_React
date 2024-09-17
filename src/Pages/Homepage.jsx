import { Container, Row, Col } from "react-bootstrap"

import HeroImage from "../assets/tju-logo1.png"

import frame1 from "../assets/bussec/Frame 1.png"
import frame2 from "../assets/bussec/Frame 2.png"
import frame3 from "../assets/bussec/Frame 3.png"
import frame4 from "../assets/bussec/Frame 4.png"
import frame5 from "../assets/bussec/Frame 5.png"
import frame6 from "../assets/bussec/Frame 6.png"

const Homepage = () => {
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
    </div>
  )
}

export default Homepage