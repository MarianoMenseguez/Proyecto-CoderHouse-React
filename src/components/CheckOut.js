import ItemCountCart from "./itemCountCart";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "./CartContext";
import swal from "sweetalert";


export default function CheckOut() {

  const cartContext = useContext(CartContext);
  let subtotal = cartContext.subtotal;
  const [finCompra, setFinCompra] = useState(false)

  useEffect(() => {
    if(finCompra===true){
      cartContext.clearCart();
    }
  }, [finCompra, cartContext])

  function sendForm(event) {
    event.preventDefault()
    swal('¡Su pedido se ha enviado con éxito!');
    setFinCompra(true)
  }


  return (
    <>
      {!finCompra ?
        <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-16">
          {/* Formulario de Contacto */}
          <div className="mt-10 sm:mt-0 w-4/5 lg:w-2/5">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:col-span-3 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 text-start">
                            Nombre
                          </label>
                          <input
                            placeholder="Introduzca aquí su nombre"
                            required
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-start">
                            Apellido
                          </label>
                          <input
                            placeholder="Introduzca aquí su apellido"
                            required
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 text-start">
                            Email
                          </label>
                          <input
                            placeholder="Introduzca aquí su email"
                            required
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-start">
                            Teléfono
                          </label>
                          <input
                            placeholder="Introduzca aquí su número (sólo números)"
                            pattern="[0-9]"
                            required
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="street-address"
                            className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>


                        <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                          <label htmlFor="about" className="text-start block text-sm font-medium text-gray-700">
                            Detalle
                          </label>
                          <ul className="mt-1">
                            {cartContext.cartList.map((product) => (
                              <li key={product.id}
                                  className="text-start sm:text-sm text-gray-500">{product.quantity} x {product.name}.</li>
                            ))}
                          </ul>
                          <p className="text-start mt-2 text-sm text-gray-500">
                            Este pedido será enviado al negocio.
                          </p>
                        </div>

                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                      <button
                        onClick={sendForm}
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Enviar pedido
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Carrito */}
          <div className="w-4/5 lg:w-1/3 right-0">
            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cartContext.cartList.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div
                        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500 text-center">Cantidad {product.quantity}</p>
                          <ItemCountCart item={product}></ItemCountCart>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => {
                                cartContext.removeItem(product.id)
                              }}
                            >
                              Quitar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${subtotal}</p>
              </div>
              <p className="text-start mt-0.5 text-sm text-gray-500">No incluye costos de envío.</p>

            </div>
          </div>
        </div>

        :
        <>
          <h1 className="text-3xl mt-24">¡Su pedido se ha enviado con éxito!</h1>
          <p className="text-xl mt-12">El negocio se pondrá en contacto con usted para coordinar la entrega y formas de pago.</p>
        </>
      }
    </>
  )
}