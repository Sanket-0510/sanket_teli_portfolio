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
              title="FarmEasy"
              description="a platform for small-scale farmers to access market and pricing information is vital for the agricultural community. It provides real-time data on market trends, commodity prices, and demand forecasts, accessible through mobile apps and web interfaces. "
              ghLink="https://github.com/Sanket-0510/Beta10-ZeroOne"
              demoLink="https://github.com/Sanket-0510/Beta10-ZeroOne"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Blogs"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Sanket-0510/sanket_teli_portfolio"
              demoLink="https://github.com/Sanket-0510/sanket_teli_portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E vault for legal records"
              description="Engineered and deployed a high-performance
              Private Blockchain application, optimizing the
              Indian Judiciary boosted performance by 60%
              leveraging AWS S3 and ensured tamper-proof
              data integrity."
              ghLink="https://github.com/shivam-Purohit/Evault-for-legal-records"
              demoLink="https://youtu.be/zz9iraNMz9s?si=7SG9Mb-2jhY9Ni3v"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
