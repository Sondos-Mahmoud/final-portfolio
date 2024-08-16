import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder image for demonstration purposes
import defaultImg from "../../Assets/Projects/default.png";
import Sampling from "../../Assets/Projects/sampling.png";
import equalizer from "../../Assets/Projects/equalizer.png";

import signalviewer from "../../Assets/Projects/signalviewer.png";

import surgery from "../../Assets/Projects/surgery.png";
import CardioMatic from "../../Assets/Projects/cardiomatic.jpg";
import CRUD from "../../Assets/Projects/crud.png";




function Projects() {
  const purpleTitleStyle = {
    color: "#6a0dad", // Purple color
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "1.5rem" // Adjust the size as needed
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        {/* Digital Signal Processing projects */}
        <h2 style={purpleTitleStyle}>Digital Signal Processing Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Fourier Transform Mixer Application"
              description="A project showcasing the application of Fourier Transform in signal processing."
              ghLink="https://github.com/Sondos-Mahmoud/Fourier-Transform-Mixer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Voice Code Access Application"
              description="An application for accessing systems via voice commands."
              ghLink="https://github.com/Sondos-Mahmoud/Security-Voice-code-Access-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={equalizer} // Placeholder image, update as needed
              title="Equalize Application"
              description="An application for equalizing signals in various formats."
              ghLink="https://github.com/Sondos-Mahmoud/Equalizer-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signalviewer} // Placeholder image, update as needed
              title="Signal Viewer App"
              description="An application to visualize and analyze signal data."
              ghLink="https://github.com/Sondos-Mahmoud/Signal-Viewer-App-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sampling} // Placeholder image, update as needed
              title="Sampling Theory Studio"
              description="A tool for studying and applying sampling theory in signal processing."
              ghLink="https://github.com/Sondos-Mahmoud/Sampling-Theory-Studio-main"
            />
          </Col>
        </Row>

        {/* Machine Learning and Signal Processing projects */}
        <h2 style={purpleTitleStyle}>Machine Learning and Signal Processing Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Brain Tumor Segmentation with U-NET"
              description="Segmentation of brain tumors using the U-NET architecture."
              ghLink="https://github.com/Sondos-Mahmoud/Brain-Tumor-Segmentation-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Breast Cancer Detection with Logistic Regression"
              description="Detection of breast cancer using logistic regression."
              ghLink="https://github.com/Sondos-Mahmoud/Breast-Cancer-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Signal Acquisition and BCI (Brain-Computer Interface)"
              description="Acquisition of signals for Brain-Computer Interface applications."
              ghLink="https://github.com/Sondos-Mahmoud/Signal-Acquisition-and-BCI"
            />
          </Col>
        </Row>

        {/* Computer Vision projects */}
        <h2 style={purpleTitleStyle}>Computer Vision Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Filtering and Edge Detection"
              description="Techniques for filtering and detecting edges in images."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Edge and Boundary Detection"
              description="Methods for detecting edges and boundaries in images."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Harris Operator & SIFT"
              description="Implementations of Harris corner detection and SIFT features."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Grayscale Images and Thresholding"
              description="Processing grayscale images and applying thresholding techniques."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Segmentation Using K-means, Region Growing, Agglomerative, and Mean Shift Methods"
              description="Image segmentation techniques using various algorithms."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Face Detection (Color or Grayscale)"
              description="Techniques for detecting faces in both color and grayscale images."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="Face Recognition Based on PCA/Eigen Analysis"
              description="Face recognition using PCA and Eigen Analysis methods."
              ghLink="https://github.com/Sondos-Mahmoud/computer-vision.git"
            />
          </Col>
        </Row>

        {/* Web Development Projects */}
        <h2 style={purpleTitleStyle}>Web Development Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surgery} // Placeholder image, update as needed
              title="Designing Surgery Department Website"
              description="A project focused on designing a website for a surgery department."
              ghLink="https://github.com/Sondos-Mahmoud/Surgery-website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CardioMatic} // Placeholder image, update as needed
              title="Designing CardioMatic Clinic Website"
              description="Creating a website for CardioMatic Clinic."
              ghLink="https://github.com/mohamedmosilhy/CardioMaticClinic.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImg} // Placeholder image, update as needed
              title="News Website with APIs"
              description="Developed a news website that integrates with various APIs."
              ghLink="https://github.com/Sondos-Mahmoud/NewsWebsite.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD} // Placeholder image, update as needed
              title="CURD (Product Management System)"
              description="A product management system with CRUD functionalities."
              ghLink="https://github.com/Sondos-Mahmoud/CURD.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
