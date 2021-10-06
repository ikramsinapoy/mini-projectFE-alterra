import { detail } from "../DetailMakanan";
import { Container, Row, Col, Image } from "react-bootstrap";
import fire from "../img/fire.svg";

const Datadetail = (props) => {
  const { Gambar_makanan, Nama_Makanan, Deskripsi_makanan, Harga, Kalori } =
    props.data;

  return (
    <div>
      <Container style={{ padding: "20px" }}>
        <Row>
          <Col>
            <Image src={Gambar_makanan} rounded style={{ height: "400px" }} />
          </Col>
          <Col>
            <Row>
              <h1 style={{ fontWeight: "bold", padding: "20px" }}>
                {Nama_Makanan}
              </h1>
            </Row>
            <Row>
              <h5>{Deskripsi_makanan}</h5>
            </Row>
            <Row>
              <div style={{ padding: "20px" }}>
                <img
                  src={fire}
                  alt="fire"
                  style={{ height: "24px", color: "red" }}
                />
                {Kalori}
              </div>
            </Row>
            <Row>
              <h3 style={{ fontWeight: "bold", padding: "20px" }}>${Harga}</h3>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Datadetail;
