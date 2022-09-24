import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {Route, Routes} from "react-router-dom";
import CheckOut from "./components/CheckOut";
import AdminSignIn from "./components/AdminSignIn";
import AdminAddProduct from "./components/AdminAddProduct";
import AdminModifyProduct from "./components/AdminModifyProduct";
import React, {useContext} from "react";
import {AdminContext} from "./components/AdminContext";
import AdminDeleteProduct from "./components/AdminDeleteProduct";
import AdminOrders from "./components/AdminOrders";
import Footer from "./components/Footer";

function App() {
  const adminContext = useContext(AdminContext);

  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="¡Pronto estaremos online!"/>}/>
          <Route path="/category/:id" element={<ItemListContainer greetings="¡Pronto estaremos online!"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/admin" element={<AdminSignIn/>}/>
          {adminContext.admin && <Route path="/adminAddProduct" element={<AdminAddProduct/>}/>}
          {adminContext.admin && <Route path="/adminModifyProduct" element={<AdminModifyProduct/>}/>}
          {adminContext.admin && <Route path="/adminDeleteProduct" element={<AdminDeleteProduct/>}/>}
          {adminContext.admin && <Route path="/adminOrders" element={<AdminOrders/>}/>}
          <Route path="/*" element={<h1 className="text-3xl mt-12">Sitio no encontrado.</h1>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;