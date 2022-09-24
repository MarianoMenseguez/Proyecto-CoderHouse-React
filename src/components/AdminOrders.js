import React, {useEffect, useState} from "react";
import {db} from "../utils/firebaseConfig";
import {collection, getDocs, query} from "firebase/firestore";
import {Link} from "react-router-dom";


export default function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ordersFromFirebase()
      .then(result => setOrders(result))
  }, [])

  const ordersFromFirebase = async () => {
    let q = query(collection(db, "orders"))
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return dataFromFirestore
  }

  return (
    <div className=''>
      <h1 className="text-3xl mt-8 mb-8">Órdenes de compra</h1>
      {orders.map(order =>
        <div className='text-left px-4 my-4 border-t border-gray-200 py-2 pt-4 mx-8' key={order.id}>
          <p><span className='text-xl mt-4'>Orden ID:</span> {order.id}</p>
          <p className='text-xl mt-4'>Comprador:</p>
          <p>Nombre y apellido: {order.buyer.name} {order.buyer.lastName}</p>
          <p>Email: {order.buyer.email}</p>
          <p>Teléfono: {order.buyer.phone}</p>
          <p className='text-xl mt-4'>Artículos comprados:</p>
          {order.items.map(item =>
            (<div className='my-1 mb-2'>
              <p>Nombre del producto: {item.title}</p>
              <p>Precio del producto: ${item.price}</p>
              <p>Cantidad comprada: {item.quantity}</p>
              <Link to={`/item/${item.id}`}>ID del producto: <span className='text-blue-500 hover:text-blue-200'>{item.id}</span></Link>
            </div>))
          }
          <p className='text-xl mt-4 text-green-600'>Total: {order.total}</p>
        </div>)}
    </div>
  )
}