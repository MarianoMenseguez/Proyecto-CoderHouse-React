import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link as LinkRouter, useNavigate } from 'react-router-dom'

export default function AdminAddProduct() {
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

  useEffect(() => {
    setProductName('')
    setProductImageSrc('')
    setProductImageAlt('')
    setProductPrice(0)
    setProductBrand('')
    setProductMin(1)
    setProductStock(0)
    setProductDescription('')
  }, [reload]);

  const handleSubmit = (event) => {
    event.preventDefault()
    let productToAdd = {
      name: productName,
      imageSrc: productImageSrc,
      imageAlt: productImageAlt,
      price: productPrice,
      brand: productBrand,
      min: productMin,
      stock: productStock,
      description: productDescription
    }
  }

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Panel del Administrador</h3>
              <p className="mt-1 text-sm text-gray-600">
                ¡Aquí podrás agregar productos a tu tienda!
              </p>
              {productImageSrc &&
                <img
                  src={productImageSrc}
                  alt={productImageAlt}
                  className="h-full w-full object-cover object-center"
                />}
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Agregar producto</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-name" className="text-start block text-sm font-medium text-gray-700">
                          Nombre del producto:
                        </label>
                        <input
                          type="text"
                          name="product-name"
                          id="product-name"
                          autoComplete="given-name"
                          className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setProductName(event.target.value)}
                          value={productName}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-brand" className="text-start block text-sm font-medium text-gray-700">
                          Marca del producto:
                        </label>
                        <input
                          type="text"
                          name="product-brand"
                          id="product-brand"
                          autoComplete="given-brand"
                          className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setProductBrand(event.target.value)}
                          value={productBrand}
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="product-price" className="text-start block text-sm font-medium text-gray-700">
                          Precio:
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="product-price"
                            id="product-price"
                            className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0.00"
                            onChange={(event) => setProductPrice(event.target.value)}
                            value={productPrice}
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <div className="col-span-6 sm:col-span-3 mt-3">
                          <label htmlFor="product-stock" className="text-start block text-sm font-medium text-gray-700">
                            Stock:
                          </label>
                          <input
                            type="number"
                            name="product-stock"
                            id="product-stock"
                            autoComplete="given-price"
                            className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={(event) => setProductStock(event.target.value)}
                            value={productStock}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 mt-3">
                          <label htmlFor="product-min" className="text-start block text-sm font-medium text-gray-700">
                            Cantidad mínima:
                          </label>
                          <input
                            type="number"
                            name="product-min"
                            id="product-min"
                            autoComplete="given-min"
                            className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={(event) => setProductMin(event.target.value)}
                            value={productMin}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 mt-3">
                          <label htmlFor="product-imageSrc" className="text-start block text-sm font-medium text-gray-700">
                            Imagen link:
                          </label>
                          <input
                            type="text"
                            name="product-imageSrc"
                            id="product-imageSrc"
                            autoComplete="given-imageSrc"
                            className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={(event) => setProductImageSrc(event.target.value)}
                            value={productImageSrc}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 mt-3">
                          <label htmlFor="product-imageAlt" className="text-start block text-sm font-medium text-gray-700">
                            Imagen texto:
                          </label>
                          <input
                            type="text"
                            name="product-imageAlt"
                            id="product-imageAlt"
                            autoComplete="given-imageAlt"
                            className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={(event) => setProductImageAlt(event.target.value)}
                            value={productImageAlt}
                          />
                        </div>
                        <label htmlFor="product-highlight" className="text-start mt-3 block text-sm font-medium text-gray-700">
                          Es un producto destacado:
                        </label>
                        <select onChange={(event) => setProductHigh(event.target.value)} className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" aria-label="Default select example">
                          <option defaultValue={false} >No</option>
                          <option value={true}>Sí</option>
                        </select>
                        <label htmlFor="product-description" className="text-start pl-0.5 mt-3 block text-sm font-medium text-gray-700">
                          Descripción:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="resize-none px-2 py-1 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Descripción del producto."
                            onChange={(event) => setProductDescription(event.target.value)}
                            value={productDescription}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 lg:w-2/3">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                  >
                    Agregar producto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}