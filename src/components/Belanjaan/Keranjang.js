import { Col, Container, Row } from "react-bootstrap";
const Keranjang = (props) => {
  const { Nama_makanan, Gambar_makanan } = props.checkoutBelanjaan;
  return (
    <Container>
      <Row>
        <Col>{Nama_makanan}</Col>
        <Col>{Gambar_makanan}</Col>
      </Row>
    </Container>
  );
};

export default Keranjang;
