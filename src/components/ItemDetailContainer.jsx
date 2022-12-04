import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../index";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { iditem } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const productsFire = doc(db, "products", iditem);

    getDoc(productsFire).then((item) => {
      setData({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    <div>
      <ItemDetail products={data} />
    </div>
  );
};

export default ItemDetailContainer;