import React,{useContext, useEffect, useState} from "react";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import {CartContext} from "./CartContext";

export default function ItemCountDetail({item}) {

  const [compra, setCompra] = useState(false)
  const [countDetail, setCountDetail] = useState(1)
  const cartContext = useContext(CartContext)

  useEffect(() => {
    debugger;
    setCountDetail(1)
  }, [1])

  function decrement() {
    debugger;
    if (countDetail > 0) {
      setCountDetail(countDetail - 1)
    } else {
      swal(`¡No puedes agregar menos de 0 unidades!`);
    }
  }

  function increment() {
    debugger;
    if (countDetail !== item.stock) {
      setCountDetail(countDetail + 1)
    } else {
      swal(`¡No puedes agregar más de ${item.stock} unidades!`);
    }
  }

  function addToCart() {
    swal(`¡Se agregaron al carrito ${countDetail} unidades!`);
    item.quantity = countDetail
    cartContext.addItem(item);
    setCompra(true);
  }

  return (
    item.stock == 0 ?
      <Link to={'/'} className='w-full'>
        <p

          className="w-full w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sin stock
        </p>
      </Link>
      :
    compra === false ?
      <div className="flex  flex-col sm:flex-row items-center gap-8 w-full lg:flex-col xl:flex-row">
        <div
          className="flex justify-between items-center px-4 py-1 border-indigo-600 border-2 rounded-md w-full sm:w-1/3 lg:w-full xl:w-1/3 hover:bg-gray-50">
          <button className="mr-5 px-4 py-1.5 hover:bg-indigo-100" onClick={decrement}>-</button>
          {countDetail}
          <button className="ml-5 px-4 py-1.5 hover:bg-indigo-100" onClick={increment}>+</button>
        </div>
        <button
          type="submit"
          className="w-full w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addToCart}
        >
          Agregar al carrito
        </button>
      </div>
      :
      <Link to={'/cart'} className='w-full'>
        <button
          type="submit"
          className="w-full w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ir al carrito
        </button>
      </Link>
  );
}