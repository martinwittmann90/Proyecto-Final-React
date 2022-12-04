//@ts-check
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { Link, useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore ();
    let myCollection;
    
    if (idCategory === undefined) {
      myCollection = collection (db, "products");
  } else {
      myCollection = query(
      collection(db, "products"),
      where("idCategory","==",idCategory)
    );
    }
    getDocs(myCollection).then((data) => {
      const auxProducts = data.docs.map(product => ({
        ...product.data(), 
        id: product.id,
      }));
      setProducts(auxProducts);
  });
  }, [idCategory]);
  return <ItemList products={products}/>;  
}
