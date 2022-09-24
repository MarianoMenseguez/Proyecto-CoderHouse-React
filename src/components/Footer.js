import {Link} from "react-router-dom";


export default function Footer() {

  return(
    <div className='py-4 text-gray-400 border-t border-gray-200 w-4/5 mx-auto max-w-[1024px] mt-8'>
      <div className='my-2 flex flex-col md:flex-row justify-center align-middle'>
        <Link className='mx-4 my-2 hover:bg-gray-100 px-2 py-1 rounded' to='/'>Inicio</Link>
        <Link className='mx-4 my-2 hover:bg-gray-100 px-2 py-1 rounded' to='/category/cremas'>Cremas</Link>
        <Link className='mx-4 my-2 hover:bg-gray-100 px-2 py-1 rounded' to='/category/perfumes'>Perfumes</Link>
        <Link className='mx-4 my-2 hover:bg-gray-100 px-2 py-1 rounded' to='/category/accesorios'>Accesorios</Link>
      </div>
      <p className='mx-4 my-4 mt-6'>© 2022 MENSEGUEZ STORE. Todos los derechos reservados.</p>
    </div>
  )
}