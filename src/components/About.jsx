import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary fw-bold mb-4">About Us</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at,
            doloribus ad harum omnis possimus suscipit et ex. Doloremque veniam
            sunt dolor, iste modi dignissimos expedita fugit asperiores, ratione
            provident, officia esse! Dicta optio quisquam ratione rerum,
            accusantium ipsum sit, saepe velit, consectetur veritatis odit! A
            commodi molestias minus deleniti. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Assumenda dolorum asperiores nulla
            veritatis, eligendi debitis facilis cumque! Accusantium, earum a!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est
            distinctio unde ipsa id sit nesciunt amet architecto autem hic?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            repellat ipsam impedit rem alias dignissimos nulla? Porro sint
            beatae repellat!
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="assets/About.jpg"
            alt="about"
            height="400px"
            width="600px"
          />
        </div>
      </div>
      <NavLink className="btn btn-outline-primary px-3" to="/contact">
        Contact Us
      </NavLink>
    </div>
  );
};

export default About;
