import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./CatalogPage/Catalog";
import Footer from "./components/ToDo/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar /><Home/></>}/>
        <Route path='/catalog' element={<><Navbar /><Catalog/><Footer /></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
