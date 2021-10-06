import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const ListMakanan = (props) => {
  const { id, Nama_Makanan, Harga, Gambar_makanan } = props.data;
  const history = useHistory();

  const detailmakanan = (id) => {
    history.push(`/detailmakanan/${props.data.id}`);
  };

  return (
    <Col xl={4}>
      <Card
        style={{
          width: "20rem",
          backgroundColor: "#212529",
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        <Card.Img
          variant="top"
          src={Gambar_makanan}
          style={{ height: "280px" }}
        />
        <Card.Body variant="dark">
          <Card.Title>{Nama_Makanan}</Card.Title>
          <Card.Text>${Harga}</Card.Text>
        </Card.Body>

        <Button variant="dark" onClick={() => detailmakanan(id)}>
          <i
            className="fas fa-chevron-right "
            onClick={() => detailmakanan(id)}
          />
          VIEW
        </Button>
      </Card>
    </Col>
  );
};

export default ListMakanan;
