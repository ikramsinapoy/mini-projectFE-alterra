import { Container, Row, Col, Image, Button } from "react-bootstrap";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";
import "../style.css";

const ListBelanjaan = (props) => {
  const { id, Gambar_makanan, Nama_makanan, Harga, Jumlah } =
    props.belumCheckout;

  const increment = () => {
    props.editjumlah({
      variables: {
        id: id,
        Jumlah: Jumlah + 1,
      },
    });
  };

  const decrement = () => {
    if (Jumlah > 1) {
      props.editjumlah({
        variables: {
          id: id,
          Jumlah: Jumlah - 1,
        },
      });
    } else {
      alert("Masukkan jumlah yang valid");
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <Container>
        <Row>
          <Col>
            <Image
              src={Gambar_makanan}
              rounded
              style={{ height: "90px", width: "130px" }}
            />
          </Col>
          <Col>
            <Row style={{ fontWeight: "bold" }}>{Nama_makanan}</Row>
            <Row>
              <div className="editjumlahbelanja">
                <img
                  src={minus}
                  onClick={decrement}
                  style={{ height: "24px", cursor: "pointer" }}
                  alt="minus"
                />
                {Jumlah}
                <img
                  src={plus}
                  style={{ height: "24px", cursor: "pointer" }}
                  alt="plus"
                  onClick={increment}
                />
              </div>
            </Row>
          </Col>

          <Col>
            <Row style={{ fontWeight: "bold" }}>${Harga}</Row>
          </Col>
          <Col>
            <Button variant="dark" onClick={() => props.hapusBelanjaan(id)}>
              Hapus
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListBelanjaan;
