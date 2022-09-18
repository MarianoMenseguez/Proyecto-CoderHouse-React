import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {Route, Routes} from "react-router-dom";
import CheckOut from "./components/CheckOut";

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="¡Pronto estaremos online!"/>}/>
          <Route path="/category/:id" element={<ItemListContainer greetings="¡Pronto estaremos online!"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
      </div>
  );
}

export default App;
