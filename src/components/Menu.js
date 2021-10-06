import { React, useState } from "react";
import { gql, useMutation, useSubscription } from "@apollo/client";
import ListMakanan from "./Data/Listmakanan";
import { Card, Button, Row, Container, Image } from "react-bootstrap";
import Navbarr from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import Carousell from "./Data/Carousel";
import jumbotron from "./img/brooke-lark-M4E7X3z80PQ-unsplash.jpg";

const MenuList = gql`
  subscription MySubscription {
    Daftar_makanan {
      id
      Nama_Makanan
      Deskripsi_makanan
      Harga
      Kalori
      Gambar_makanan
    }
  }
`;

function Menu(props) {
  const { data, loading } = useSubscription(MenuList);

  return (
    <div>
      <Navbarr />
      {/* <Carousell /> */}
      {/* <Image src={jumbotron} fluid /> */}
      <br />
      <Container>
        <Row>
          {data?.Daftar_makanan.map((item) => (
            <ListMakanan key={item.id} data={item} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Menu;
