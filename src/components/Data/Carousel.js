import React from "react";
import Carousel from "react-bootstrap/Carousel";
import gambarSatu from "../img/background.jpg";
import gambarDua from "../img/lily-banse--YHSwy6uqvk-unsplash.jpg";
import gambarTiga from "../img/krystel-heddy-GUAxf0tMcKU-unsplash.jpg";

export default function Carousell() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src={gambarSatu}
            alt="First slide"
            style={{ height: "100vh", width: "100%", margin: "0 auto" }}
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src={gambarDua}
            alt="Second slide"
            style={{ height: "100vh", width: "100%", margin: "0 auto" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gambarTiga}
            alt="Third slide"
            style={{ height: "100vh", width: "100%", margin: "0 auto" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
