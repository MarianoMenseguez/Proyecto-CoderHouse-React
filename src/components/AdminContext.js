import {createContext, useState} from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({children}) {
  const [admin, setAdmin] = useState(false)
  const [productToModify, setProductToModify] = useState({})
  const [productToDelete, setProductToDelete] = useState({})

  const adminOnline = () => {
    setAdmin(true)
  }

  const adminOffline = () => {
    setAdmin(false)
  }

  const modifyProduct = (product) => {
    setProductToModify(product)
  }

  const deleteProduct = (product) => {
    setProductToDelete(product)
  }

  return (
    <AdminContext.Provider value={{admin, adminOnline, adminOffline, productToModify, modifyProduct, productToDelete, deleteProduct}}>
      {children}
    </AdminContext.Provider>
  )
}