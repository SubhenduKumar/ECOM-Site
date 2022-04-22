import React from "react";
import Products from "./Products";
import { Carousel } from "react-bootstrap";
const Home = () => {
  return (
    <div className="hero">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/bg1.png"
            alt="Background"
            height="600px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/bg2.png"
            alt="Background"
            height="600px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/bg3.png"
            alt="Background"
            height="600px"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/bg11.jpg"
            alt="Second slide"
            height="600px"
          />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-5 fw-bolder mb-0">
                  NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/bg3.jpg"
            alt="Third slide"
            height="600px"
          />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-5 fw-bolder mb-0">
                  NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
        </Carousel.Item> */}
      </Carousel>
      {/* <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/assets/bg.jpg"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div> 
       </div> */}
    </div>
  );
};

export default Home;
