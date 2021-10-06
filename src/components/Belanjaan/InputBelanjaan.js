import { useState } from "react";
import "../DetailMakanan";

function InputBelanjaan(props) {
  const { Nama_Makanan, Harga, Gambar_makanan } = props.detail;
  const [state, setState] = useState({
    Gambar_makanan: "",
    Nama_makanan: "",
    Harga: 0,
    jumlah: 0,
  });

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

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    props.insertBelanja({
      variables: {
        Gambar_makanan: Gambar_makanan,
        Nama_makanan: Nama_Makanan,
        Harga: Harga,
        Jumlah: amount.click,
      },
    });
    setState({
      ...state,
      Gambar_makanan: "",
      Nama_makanan: "",
      Harga: 0,
      Jumlah: 0,
    });
  };
}
