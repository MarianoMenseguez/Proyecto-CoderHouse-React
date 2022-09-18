import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./CartContext";

export default function CartWidget() {
  const cartContext = useContext(CartContext);
  let cantidad = cartContext.cantidad;

  return (
    <div
      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link to='/cart'>
        <button
          type="button"
          className="bg-gray-800 p-1 sm:rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </button>
      </Link>
      {cantidad !== 0 && <span className="text-gray-400 text-xs mb-6 ml-[-4px]">{cantidad}</span>}
    </div>
  );
}