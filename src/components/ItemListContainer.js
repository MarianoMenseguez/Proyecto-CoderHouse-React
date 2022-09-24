import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { firestoreFetch } from '../utils/firebaseConfig'
import Hero from "./Hero";

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    firestoreFetch(id)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className="div-construction pt-0 flex flex-col justify-start items-center">
      <Hero />
      {
        products.length > 0 ?
        <ItemList items={products}/>
        :
        <div className="flex justify-center items-center min-h-[50vh] w-screen">
          <div className="spin text-xl"></div>
        </div>
      }
    </div>
  );
}