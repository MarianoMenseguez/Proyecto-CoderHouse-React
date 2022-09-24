import React, {useContext, useEffect, useState} from "react";
import swal from 'sweetalert';
import {Link as LinkRouter, useNavigate} from 'react-router-dom'
import {AdminContext} from "./AdminContext";
import {doc, deleteDoc} from "firebase/firestore";
import {db} from "../utils/firebaseConfig";

export default function AdminDeleteProduct() {

  const adminContext = useContext(AdminContext);

  const navigate = useNavigate();
  const [reload, setReload] = useState(false);

  const [productName, setProductName] = useState("")
  const [productImageSrc, setProductImageSrc] = useState("")
  const [productImageAlt, setProductImageAlt] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [productBrand, setProductBrand] = useState("")
  const [productMin, setProductMin] = useState(1)
  const [productStock, setProductStock] = useState(0)
  const [productCategory, setProductCategory] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productHigh, setProductHigh] = useState("")
  const[productID, setProductID] = useState('')

  useEffect(() => {
    setProductName(adminContext.productToModify.name)
    setProductImageSrc(adminContext.productToModify.imageSrc)
    setProductImageAlt(adminContext.productToModify.imageAlt)
    setProductPrice(adminContext.productToModify.price)
    setProductBrand(adminContext.productToModify.brand)
    setProductMin(adminContext.productToModify.min)
    setProductStock(adminContext.productToModify.stock)
    setProductDescription(adminContext.productToModify.description)
    setProductID(adminContext.productToModify.id)
  }, [reload]);

  const deleteProduct = (event) => {
    event.preventDefault()
    console.log(productID)
    const deleteProductInFirebase = async () => {
      await deleteDoc(doc(db, "products", productID));
      return productID
    }

    deleteProductInFirebase()
      .then(result => swal("Se ha eliminado correctamente el producto con el ID:\n\n" + result))
      .catch(err => console.log(err))

    setTimeout(() => {
      navigate("/");
    }, "5000")
  }

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Panel del Administrador</h3>
              <p className="mt-1 text-sm text-gray-600">
                ¡Aquí podrás eliminar los productos de tu tienda!
              </p>
              <img
                src={productImageSrc}
                alt={productImageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Eliminar producto</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <p
                          className="text-start px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          Nombre del producto: {productName}
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <p
                          className="text-start px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          Marca del producto: {productBrand}
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <p
                          className="text-start px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          Precio del producto: ${productPrice}
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <p
                          className="text-start px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          Stock del producto: {productStock}
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <p
                          className="text-start px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          Descripción del producto: {productDescription}
                        </p>
                      </div>
                      <div className="mt-3 w-full px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={deleteProduct}
                        >
                          Eliminar producto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}