import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple"> Harshit Nand </span>{" "}
            from <span className="purple">Delhi, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">AMUS SOFT</span>.
            <br />I hold an Bachelor of Engineering  in{" "}
            <span className="purple">COMPUTER SCIENCE</span> from{" "}
            <span className="purple">NSIT,Delhi</span> (Tier 1 Goverment collage).
         
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
