import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./CatalogPage/Catalog";
import Footer from "./components/ToDo/footer";
import Item1 from "./CatalogPage/Item1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar /><Home/></>}/>
        <Route path='/catalog' element={<><Catalog/><Footer /></>}/>
        {/* <Route path='/viewmore/1' element={<><Navbar /><Item1/><Footer /></>}/>
        <Route path='/viewmore/2' element={<><Navbar /><Footer /></>}/>
        <Route path='/viewmore/3' element={<><Navbar /><Footer /></>}/>
        <Route path='/viewmore/4' element={<><Navbar /><Footer /></>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
