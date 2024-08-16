import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";  // Updated to PNG
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Sondos Mahmoud, a passionate and dedicated final-year student
              pursuing a Bachelor's Degree in Systems and Biomedical Engineering at Cairo University, with an expected graduation in 2025.
              <br />
              <br />
              My interests span across multiple disciplines, including{" "}
              <i>
                <b className="purple">Medical Devices, Signal Processing, Software Development, and Computer Vision.</b>
              </i>{" "}
              <br />
              <br />
              Throughout my academic journey, I have gained hands-on experience in various projects, ranging from designing medical devices to developing software solutions and implementing machine learning models.
              <br />
              <br />
              I am skilled in a wide array of technologies, including{" "}
              <i>
                <b className="purple">C++, Python, JavaScript, and embedded systems.</b>
              </i>{" "}
              My expertise in tools such as{" "}
              <i>
                <b className="purple">MATLAB, Proteus, and GitHub</b>
              </i>{" "}
              has allowed me to excel in both hardware and software development.
              <br />
              <br />
              I am always eager to learn and apply my knowledge in real-world applications, and I thrive in collaborative environments where I can contribute to meaningful projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">Contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sondos-Mahmoud"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://eng.sondosmahmoud@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sondos-mahmoud-9831b8281"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
