import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./CatalogPage/Catalog";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/home' element={<><Navbar /><Home/></>}/>
        <Route path='/catalog' element={<><Navbar /><Catalog/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
