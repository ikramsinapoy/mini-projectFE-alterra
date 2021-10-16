import { useMutation, useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import React, { useState, useEffect } from "react";
import ListBelanjaan from "./Data/ListBelanjaan";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Navigation/Footer";
import Navbarr from "./Navigation/Navbar";
import { useHistory } from "react-router-dom";

const subsbelanjaan = gql`
  subscription MySubscription {
    Daftar_Belanjaan {
      id
      Gambar_makanan
      Nama_makanan
      Harga
      Jumlah
    }
  }
`;

const updatejumlah = gql`
  mutation MyMutation($id: Int!, $Jumlah: Int!) {
    update_Daftar_Belanjaan_by_pk(
      pk_columns: { id: $id }
      _set: { Jumlah: $Jumlah }
    ) {
      Nama_makanan
      Gambar_makanan
      Harga
      Jumlah
    }
  }
`;
const queryInsert = gql`
  mutation MyMutation(
    $Nama_pembeli: String!
    $NoHP_pembeli: String!
    $Alamat_pembeli: String!
  ) {
    insert_Pembeli_one(
      object: {
        Nama_pembeli: $Nama_pembeli
        NoHP_pembeli: $NoHP_pembeli
        Alamat_pembeli: $Alamat_pembeli
      }
    ) {
      Nama_pembeli
      NoHP_pembeli
      Alamat_pembeli
    }
  }
`;
const queryBelumCheckout = gql`
  subscription MySubscription {
    Daftar_Belanjaan(where: { status: { _eq: false } }, order_by: { id: asc }) {
      Gambar_makanan
      Nama_makanan
      Jumlah
      Harga
      id
    }
  }
`;

const updateStatus = gql`
  mutation MyMutation {
    update_Daftar_Belanjaan(
      where: { status: { _eq: false } }
      _set: { status: true }
    ) {
      returning {
        id
        Nama_makanan
        Gambar_makanan
        Harga
      }
    }
  }
`;

const queryDeleted = gql`
  mutation MyMutation($_eq: Int!) {
    delete_Daftar_Belanjaan(where: { id: { _eq: $_eq } }) {
      returning {
        id
        Nama_makanan
        Jumlah
        Harga
      }
    }
  }
`;

function Card(props) {
  const { data: listbelanja } = useSubscription(subsbelanjaan);
  const { data: belumCheckout } = useSubscription(queryBelumCheckout);
  const [editjumlah, { data: updatejmlh }] = useMutation(updatejumlah);
  const [insertPembeli, { data: insert, loading: loadingInsert }] =
    useMutation(queryInsert);
  const [deleteBelanjaan] = useMutation(queryDeleted);
  const [updatestatusBelanja, { data: updatedata }] = useMutation(updateStatus);
  const history = useHistory();

  const [state, setState] = useState({
    nama: "",
    noHP: "",
    alamat: "",
  });

  const [total, setTotal] = useState({
    jumlahTotal: 0,
  });

  useEffect(() => {
    let sumtotal = 0;
    belumCheckout?.Daftar_Belanjaan.forEach(
      (i) => (sumtotal += i.Harga * i.Jumlah)
    );
    setTotal({
      jumlahTotal: sumtotal,
    });
  }, [belumCheckout]);

  const handleSubmit = (e) => {
    const inputNama = prompt("Masukkan nama", state.nama);
    const inputNo = prompt("Masukkan noHP", state.noHP);
    const inputAlamat = prompt("Masukkan alamat", state.alamat);
    insertPembeli({
      variables: {
        Nama_pembeli: inputNama,
        NoHP_pembeli: inputNo,
        Alamat_pembeli: inputAlamat,
      },
    });
    setState({
      ...state,
      nama: "",
      noHP: "",
      alamat: "",
    });

    updatestatusBelanja();

    history.push(`/review`);
  };

  const hapusBelanjaan = (id) => {
    deleteBelanjaan({
      variables: {
        _eq: id,
      },
    });
  };
  return (
    <div>
      <Navbarr />
      {belumCheckout?.Daftar_Belanjaan.map((item) => (
        <ListBelanjaan
          key={item.id}
          belumCheckout={item}
          editjumlah={editjumlah}
          hapusBelanjaan={hapusBelanjaan}
        />
      ))}
      <Container>
        <Row></Row>
        <Row>
          <Col></Col>
          <Col>
            <h3 style={{ fontWeight: "bold" }}>Total :</h3>
          </Col>
          <Col>
            <div style={{ fontWeight: "bold", fontSize: "32px" }}>
              ${total.jumlahTotal}
            </div>
          </Col>
        </Row>
        <Row>
          {" "}
          <Button variant="dark" size="lg" active onClick={handleSubmit}>
            Checkout
          </Button>
        </Row>
      </Container>

      <br />

      <Footer />
    </div>
  );
}

export default Card;
