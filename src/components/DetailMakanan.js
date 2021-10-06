import React, { useState } from "react";
import Navbarr from "./Navigation/Navbar";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { Button } from "react-bootstrap";
import DisplayDetail from "./Data/DisplayDetail";
import { useRouteMatch } from "react-router";
import Footer from "./Navigation/Footer";
import Datadetail from "./Data/Datadetail";
import plus from "./img/plus.svg";
import minus from "./img/minus.svg";
import { Row, Container, Col } from "react-bootstrap";

const detailmakanan = gql`
  subscription MySubscription($_eq: Int!) {
    Daftar_makanan(where: { id: { _eq: $_eq } }) {
      Gambar_makanan
      Nama_Makanan
      Deskripsi_makanan
      Kalori
      Harga
    }
  }
`;

const insertBelanjaan = gql`
  mutation MyMutation(
    $Gambar_makanan: String!
    $Harga: Int!
    $Jumlah: Int!
    $Nama_makanan: String!
  ) {
    insert_Daftar_Belanjaan_one(
      object: {
        Gambar_makanan: $Gambar_makanan
        Harga: $Harga
        Jumlah: $Jumlah
        Nama_makanan: $Nama_makanan
      }
    ) {
      Nama_makanan
      Jumlah
      Harga
    }
  }
`;

function DetailMakanan(props) {
  const {
    params: { id },
  } = useRouteMatch("/detailmakanan/:id");

  const { data: detail, loading: loadingdetail } = useSubscription(
    detailmakanan,
    {
      variables: { _eq: id },
    }
  );

  const [insertBelanja, { data: insert }] = useMutation(insertBelanjaan);
  const [amount, setAmount] = useState({
    click: 0,
  });

  const increment = () => {
    setAmount({
      click: amount.click + 1,
    });
  };

  const decrement = () => {
    setAmount({
      click: amount.click - 1,
    });
  };

  const onSubmitdata = (e) => {
    e.preventDefault();
    insertBelanja({
      variables: {
        Gambar_makanan: detail.Daftar_makanan[0].Gambar_makanan,
        Nama_makanan: detail.Daftar_makanan[0].Nama_Makanan,
        Harga: detail.Daftar_makanan[0].Harga,
        Jumlah: amount.click,
      },
    });
    setAmount({
      click: 0,
    });

    setTimeout(() => {
      alert("PESANAN BERHASIL DIMASUKKAN");
    }, 1000);
  };

  return (
    <div>
      <Navbarr />
      <div style={{ padding: "80px" }}>
        <DisplayDetail data={detail} />

        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col style={{ padding: "10px" }}>
              <img
                src={minus}
                onClick={decrement}
                alt="minus"
                style={{ height: "32px", cursor: "pointer" }}
              />
              {amount.click}
              <img
                src={plus}
                onClick={increment}
                alt="plus"
                style={{ height: "32px", cursor: "pointer" }}
              />
              <br />
            </Col>
            <Col>
              {" "}
              <Button variant="dark" onClick={onSubmitdata}>
                add to card
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default DetailMakanan;
