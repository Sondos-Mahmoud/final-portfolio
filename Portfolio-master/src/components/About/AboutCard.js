import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sondos Mahmoud </span>
            from <span className="purple">Cairo, Egypt.</span>
            <br />
            I am a final-year student pursuing a Bachelor's Degree in Systems and Biomedical Engineering at Cairo University.
            <br />
            My interests lie in the areas of Medical Devices, Signal Processing, Software Development, and Computer Vision.
            <br />
            <br />
            Apart from my academic pursuits, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading about the latest tech innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new programming languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in engineering workshops and hackathons
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Continuously learning and creating to make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Sondos Mahmoud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
