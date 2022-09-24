import {createContext, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [cartList, setCartList] = useState([])

  // Cantidad de productos en el carrito
  let cantidadInicial = 0;
  let cantidad = cartList.reduce(function (accumulator, curValue) {
    return accumulator + curValue.quantity
  }, cantidadInicial)

  // Subtotal de la compra en el carrito
  let subtotalInicial = 0;
  let subtotal = cartList.reduce(function (accumulator, curValue) {
    return accumulator + (Number(curValue.price) * curValue.quantity)
  }, subtotalInicial)

  const addItem = (item) => {
    if (cartList.filter(elemento => elemento.id === item.id).length === 0) {
      setCartList([...cartList, item])
    } else {
      let temporal = cartList.map((elemento) => {
        if (elemento.id !== item.id) {
          return elemento
        } else {
          return item
        }
      })
      setCartList(temporal)
    }
  }

  const removeItem = (itemID) => {
    setCartList(cartList.filter(item => item.id !== itemID))
  }

  const clearCart = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider value={{cartList, addItem, removeItem, clearCart, cantidad, subtotal}}>
      {children}
    </CartContext.Provider>
  )
}