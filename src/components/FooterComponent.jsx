import { Container, Row, Col } from "react-bootstrap"
import Icon from "../assets/TJU-white.webp"


const FooterComponent = () => {
  return (
    <div className="footer" id="Footer">
      <Container>
        <Row className="gap-2">
          <Col className="mb-4">
            <img src={Icon} alt="" className="align-items-center mx-auto"/>
            <div className="sub-title rounded-3">
              <p>Tangkal Jati Utama</p>
            </div>
            <div className="brand d-flex gap-3 align-items-center mt-4">
              <div className="item bg-white rounded-circle full">
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="item bg-white rounded-circle full">
                <a href="">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="item bg-white rounded-circle full">
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="item bg-white rounded-circle full">
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col className="mb-4">
            <h1 className="fw-bolder text-white">Head Office</h1>
            <p className="fw-normal text-white">TAMAN JAYA NO.5 RT.001 RW.001,CIPAYUNG,KOTA DEPOK JAWA BARAT</p>
            <ul className="">
              <li>
                <a href="mailto:pt.tjupersada@gmail.com" className="link-light">
                  <i class="fa-solid fa-envelope me-2"></i>
                  pt.tjupersada@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6285159366130" className="link-light">
                  <i class="fa-solid fa-phone me-2"></i>
                  +62 851-5936-6130
                </a>
              </li>
              <li>
                <a href="tel:+628231194722" className="ms-4 link-light">+62 823-1194-722</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h1 className="fw-bolder text-white">Business Sector</h1>
            <ul className="text-white">
              <li>Civil Construction</li>
              <li>Mechanical Construction/Installation</li>
              <li className="text-truncate">Electrical & Instrumentation Construction/Installation</li>
              <li>Operation & Maintenance Service</li>
              <li>Engineering & Design</li>
              <li>Project Management Service</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent