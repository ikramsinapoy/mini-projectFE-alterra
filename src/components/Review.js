import { useMutation, useSubscription } from "@apollo/client";
import { Container, Row, Button } from "react-bootstrap";
import gql from "graphql-tag";
import React from "react";
import Keranjang from "./Belanjaan/Keranjang";
import Listpembeli from "./Belanjaan/Listpembeli";
import completed from "./img/completed.svg";
import maps from "./img/maps.svg";
import "./style.css";
import { useHistory } from "react-router-dom";

const queryPembeli = gql`
  subscription MySubscription {
    Pembeli(where: { checkout: { _eq: false } }) {
      id
      Nama_pembeli
      Alamat_pembeli
      NoHP_pembeli
    }
  }
`;

const queryUpdateCheckout = gql`
  mutation MyMutation {
    update_Pembeli(
      where: { checkout: { _eq: false } }
      _set: { checkout: true }
    ) {
      returning {
        Nama_pembeli
        Alamat_pembeli
        NoHP_pembeli
      }
    }
  }
`;

function Review(props) {
  const history = useHistory();
  const [updateCheckout, { data: updtCheckout }] =
    useMutation(queryUpdateCheckout);
  const { data: checkoutPembeli } = useSubscription(queryPembeli);

  const handleSubmit = (e) => {
    updateCheckout();

    history.push(`/menu`);
  };

  return (
    <div>
      <Container>
        <Row>
          <img src={completed} alt="completed" style={{ height: "150px" }} />
        </Row>
        <Row>
          <div className="reviewBox">
            <h1>Successful Order</h1>
            <div className="boxbottom">
              <img src={maps} alt="completed" style={{ height: "32px" }} />
              <div style={{ fontWeight: "bold" }}>Delivery to</div>
              {checkoutPembeli?.Pembeli.map((i) => (
                <Listpembeli key={i.id} checkoutPembeli={i} />
              ))}
            </div>
          </div>
        </Row>
        <Row>
          <Button variant="dark" size="lg" onClick={handleSubmit}>
            Back to menu
          </Button>
        </Row>
      </Container>

      {/* {checkoutBelanjaan?.Daftar_Belanjaan.map((item) => (
        <Keranjang key={item.id} checkoutBelanjaan={item} />
      ))} */}
    </div>
  );
}

export default Review;
