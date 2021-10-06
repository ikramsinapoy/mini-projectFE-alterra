import Datadetail from "./Datadetail";

const DisplayDetail = (props) => {
  return (
    <div>
      {props.data?.Daftar_makanan.map((item) => (
        <Datadetail key={item.id} data={item} />
      ))}
    </div>
  );
};

export default DisplayDetail;
