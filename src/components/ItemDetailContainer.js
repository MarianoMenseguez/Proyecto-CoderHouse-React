import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestoreOneFetch } from "../utils/firebaseConfig";

export default function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    firestoreOneFetch(id)
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [id])

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div className="flex justify-center items-center min-h-[50vh] w-screen">
        <div className="spin text-xl"></div>
      </div>
  )
}