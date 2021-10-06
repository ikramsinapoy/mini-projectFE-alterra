import { Col, Container, Row } from "react-bootstrap";

const Listpembeli = (props) => {
  const { Nama_pembeli, Alamat_pembeli, NoHP_pembeli } = props.checkoutPembeli;

  return (
    <Container>
      <Row style={{ fontWeight: "bold" }}>{Nama_pembeli}</Row>
      <Row>{Alamat_pembeli}</Row>
      <Row>{NoHP_pembeli}</Row>
    </Container>
  );
};

export default Listpembeli;
