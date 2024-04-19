import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/rajsrm2021/Multi-Customer-Support-Chat-Bot"
              demoLink="https://648ec72b2348aa1320ce5f6a--glittery-rugelach-4860ca.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Learning Platform"
              description="Our subscription-based model, utilizing Razor Pay for secure payments, grants exclusive content access to subscribed users. Leveraging React JS, Chart.JS, Node JS, Express JS, Node Mailer, and Cloudinary, we offer seamless subscription management and content delivery."
              ghLink="https://github.com/rajsrm2021/E-Learning-Frontend"
              demoLink="https://e-learning-frontend-virid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Voice Assistant - JIYA"
              description="This project is a simple voice assistant built using Python. It can perform various tasks like playing music from YouTube, telling the current time, fetching information from Wikipedia, telling jokes, and sending WhatsApp messages."
              ghLink="https://github.com/rajsrm2021/Voice-Assistant-Alexa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="EYE-Controlled Mouse"
              description="This project utilizes computer vision techniques to control the mouse cursor with the movement of the user's eye. It uses the MediaPipe library for face mesh detection and PyAutoGUI for controlling the mouse cursor."
              ghLink="https://github.com/rajsrm2021/eye-controled-mouse-open_CV"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix clone project developed using React, a popular JavaScript library for building user interfaces. The project aims to replicate the user experience of the renowned streaming platform, Netflix. By fetching data from a designated API, the application populates the content and provides users with a seamless browsing and streaming experience."
              ghLink="https://github.com/rajsrm2021/Netflix-Clone-with-React-and-API-Integration"
              demoLink="https://netflix-rajjaiswal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-Mail spam classifier"
              description="This project aims to classify SMS or email messages as either spam or not spam using machine learning techniques. The classifier is built using a dataset sourced from Kaggle and implemented in a Jupyter Notebook. Additionally, the model is integrated into a Streamlit web application for ease of use."
              ghLink="https://github.com/rajsrm2021/Email-SMS-Spam-Classifier"
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
