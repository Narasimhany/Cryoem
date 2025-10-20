import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import backgroundImage from "./background.png"; // ✅ Image in src/pages

const About = () => {
  return (
    <div className="about-page">
      {/* Hero section with background image */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="overlay">
          <h1 className="hero-title">About VitriFlow</h1>
        </div>
      </div>

      <div className="about-logo">
        <center>
        <img
          src="/Logo.png"
          alt="Proteoma Logo"
        /></center>
      </div>

      {/* Content section */}
      <Container className="about-content">
        <h2>Our Mission</h2>
        <p>
          Designed to meet the growing demands of Cryo-electron microscopy (Cryo-EM) data analysis, our platform offers unparalleled scalability, robust security, seamless data management, and flexible pricing plans. Whether you're a small research lab or a large institution, our application is engineered to enhance your productivity, streamline your workflows, and help you achieve breakthrough results in the study of molecular structures.
        </p>

        <h2 className="section-title">Meet our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <h4>Vishva</h4>
            <p>
              Vishva is having 15 years of experience in the design and
              development of full-stack software applications, with strong
              expertise in Java and C/C++ on both Windows and Linux operating
              systems. His background spans the telecommunication, finance, and
              CAD industries, where he have developed applications using C/C++,
              Java, Angular, Spring Framework, and Spring Boot. He is skilled in
              building microservices with Spring Boot, REST APIs, and Apache
              Tomcat, along with experience in CI/CD implementation using
              JenkinsCore, Docker, and Terraform. Additionally, he have
              expertise in containerization with AWS and Kubernetes, and working
              with messaging systems like Apache Kafka.
            </p>
            <p>
              <strong>Contact:</strong> jon.fay@proteoma.org
            </p>
          </div>

          <div className="team-member">
            <h4>Sindhu Sripuram</h4>
            <p>
              Sindhu Sripuram is a Project Manager with a strong foundation in
              Agile methodologies, Scrum, and Business Analysis. With over six
              years of experience, she successfully led cross-functional teams,
              implemented strategic initiatives, and driven technology and
              data-focused projects in industries such as finance and edtech.
              Holding a master’s degree in project management, specializes her
              in streamlining project workflows, optimizing business processes,
              and ensuring seamless collaboration between technical and business
              teams. Her expertise in Scrum and Agile frameworks allows to
              manage iterative project lifecycles while ensuring stakeholder
              alignment, risk mitigation, and efficient resource allocation.
            </p>
            <p>
              <strong>Contact:</strong> tyler@proteoma.org
            </p>
          </div>

          <div className="team-member">
            <h4>Anoop Chandran</h4>
            <p>
              Senior Application Lead with 15+ years of experience in all phases
              of the Software Development Life Cycle. Skilled in collaborating
              with stakeholders, managing cross-functional teams, and conducting
              root cause analysis for effective issue resolution. Proven
              expertise in developing, testing, debugging, and implementing
              solutions to meet business needs. Adept at team leadership,
              performance management, recruitment, and resource planning,
              ensuring seamless project execution. Recognized for problem-solving,
              coordination, and communication skills, driving technical
              excellence and business success.
            </p>
            <p>
              <strong>Contact:</strong> tyler@proteoma.org
            </p>
          </div>

          <div className="team-member">
            <h4>Vinod Kumar</h4>
            <p>
              Senior Software Developer specializing in building scalable
              microservices for financial and enterprise applications. With 9
              years of experience in Java, Spring Boot, Microservices, AWS, and
              Kafka, he develops high-performance backend solutions. Skilled in
              ReactJS, NodeJS, and database optimization, he ensures seamless
              integrations and robust system architectures. Passionate about
              cloud computing and DevOps, he leverages CI/CD pipelines and
              monitoring tools like Splunk to enhance efficiency. Outside work,
              he enjoys exploring emerging tech trends and optimizing software
              workflows.
            </p>
            <p>
              <strong>Contact:</strong> tyler@proteoma.org
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
