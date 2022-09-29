import React, {useContext} from 'react'
import ItemCountDetail from "./ItemCountDetail";
import {AdminContext} from "./AdminContext";
import {Link} from "react-router-dom";

export default function ItemDetail(props) {

  const adminContext = useContext(AdminContext);

  const modificarProducto = () => {
    adminContext.modifyProduct(props.item);
  }

  let temporalDescription = props.item.description
  debugger;
  if(typeof temporalDescription === typeof 'string') {
    temporalDescription = temporalDescription.split('\\n')
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="overflow-hidden rounded-lg lg:block">
            <img
              src={props.item.imageSrc}
              alt={props.item.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Description and Price */}
          <div
            className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.item.name}</h1>
            </div>
            <div
              className="py-3 lg:py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">

              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  {(typeof(temporalDescription) === 'string' ) ?
                    <p className="text-base text-gray-900">{props.item.description}</p>
                    :
                    temporalDescription.map(parrafo =>
                      <p key={parrafo} className="text-base text-gray-900">{parrafo}</p>
                    )
                  }
                </div>
              </div>
            </div>

            {/* Price and Add-to-Cart Button */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${props.item.price}</p>
              <div className="flex flex-col items-center mt-6 mb-0">
                {!adminContext.admin && <ItemCountDetail item={props.item}/>}
                {adminContext.admin &&
                  <Link to={'/adminModifyProduct'} className='w-full'>
                    <button
                      onClick={modificarProducto}
                      type="submit"
                      className="w-full w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Modificar producto
                    </button>
                  </Link>}
                {adminContext.admin &&
                  <Link to={'/adminDeleteProduct'} className='mt-8 w-full'>
                    <button
                      onClick={modificarProducto}
                      type="submit"
                      className="w-full w-full border border-indigo-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-500 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Eliminar producto
                    </button>
                  </Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}