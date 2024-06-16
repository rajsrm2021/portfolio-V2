import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/certificate/DSA.png";
import emotion from "../../Assets/certificate/Apprication.jpg";
import editor from "../../Assets/certificate/frontend.jpg";
import chatify from "../../Assets/certificate/RA2111003011888.JPG";
import suicide from "../../Assets/certificate/JAVA.png";
import bitsOfCode from "../../Assets/certificate/CISCO.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've owned on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Programing in JAVA"
              description="Achieved elite rank in Java certification through NPTEL, showcasing advanced proficiency in Java programming and comprehensive understanding of key concepts."
              ghLink="https://drive.google.com/file/d/1pwcaHKLyUoVAWohym2Xpn3FwTI6iC7Un/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Python Programming - IIT Kharagpur"
              description="Completed Python certification from IIT Kharagpur through NPTEL, demonstrating expertise in Python programming"
              ghLink="https://drive.google.com/file/d/1mD33YSmfJHSfFdwR_phiA6Iaw-VgEdft/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Programming in JavaScript"
              description="Successfully completed JavaScript certification on Coursera, emphasizing practical proficiency and solid understanding of key concepts."
              ghLink="https://drive.google.com/file/d/1JExmbRvqZ1JE0TvND2tX5JjTDlhC6QpS/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Data Structure and Algorithms"
              description="completed a comprehensive 3.5-month Data Structures and Algorithms with Java course at Apna College, earning a well-deserved certification!"
              ghLink="https://drive.google.com/file/d/1X2T1pmUh05PumbhkSOhnDxQq_GzGBon5/view?usp=sharing"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Networking Essentials - Cisco"
              description="Secured Cisco Networking Essentials certification, validating proficiency in networking fundamentals and practical skills, showcasing expertise in Cisco's networking technologies."
              ghLink="https://drive.google.com/file/d/1oSVQLTIa78ZNhaPdbZ3vkfUzYQZEVwkg/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Certificate of Appreciation"
              description="Grateful to be honored with a certificate of appreciation by the Head of Department and Chairperson of SRM University for my outstanding achievement in securing internships at Mahindra and Mahindra this year!."
              // ghLink="https://github.com/rajsrm2021/Email-SMS-Spam-Classifier"
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
