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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Amus Hiring"
              description=" Worked on the development of web Application using React and AWS .I build the job hiring platform where Multiple Role Base Login,Job Posting, Multiple-Dashboard,Profile-Edit,etc.Implemented responsive designs and Collaborated with clients to gather requirements and provide technical solutions ."
              ghLink="https://github.com/HarshitNand"
              demoLink="https://amushiring.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Message-App "
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI,socket.IO and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.
              "
              ghLink="https://github.com/HarshitNand/Message-App"
              demoLink="https://talk-a-tive-7fgq.onrender.com/chats"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/HarshitNand"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Railway DataBase Management System"
              description="This will reduce the manual Error involved in the Booking and cancelling the ticket.It will make convenient for the customer.Maintain the data  about their customer and also about seat available at them.Optimized the database queries and resulting the reduction of downtime.
              Tools-SQL,HTML,CSS,PHP"
              ghLink="https://github.com/HarshitNand/railway-management-system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chat Bot College Enquiry"
              description="Using 'Natural Launguage Processing' for the Aims to provide Information regarding collage query.IT is web application where the student get information about the college and courses. Tools-OpenNLP,CSS,HTML"
              ghLink="https://github.com/HarshitNand"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/HarshitNand"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
