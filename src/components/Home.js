import React from "react";
import styles from "./style/Home.module.css";
import icon from "./img/homebackground.jpg";
import Navbarr from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import about from "./img/lukas-bee-RnnCdg63KBY-unsplash.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbarr />

      <div className="homeContainer">
        <div style={{ padding: "20px" }} className="homeContent">
          <h1 className={styles.h1}>
            <span className={styles.h1green}>Good </span>Food
          </h1>
          <h1 className={styles.h1}>
            Good <span className={styles.h1green}>Mood</span>
          </h1>
          <p className="homedeskripsi">
            There is no sincere love than the love of food
          </p>
          <button className={styles.buttonCheck}>
            {" "}
            <Link to="/menu" style={{ color: "#fff" }}>
              Check menu
            </Link>
          </button>
        </div>

        <div>
          <img src={icon} alt="icon" className="homebackground" />
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <Image src={about} alt="about" className="imgabout" rounded />
          </Col>
          <Col>
            <div className="containerAbout">
              <div className="titleabout">
                you want your daily calories regular?
              </div>
              <br />
              <div className="textabout">
                we are here for you! Not only healthy and according to
                nutritional recommendations, you can still move freely without
                having to worry about preparing your daily intake. Choose your
                food now!
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default Home;
