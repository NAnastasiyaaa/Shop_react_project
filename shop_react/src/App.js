import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./CatalogPage/Catalog";
import Footer from "./components/ToDo/footer";
import {Item1, Item2, Item3, Item4} from "./CatalogPage/Itemsmore"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar /><Home/></>}/>
        <Route path='/catalog' element={<><Navbar /><Catalog/><Footer /></>}/>
        <Route path='/viewmore/1' element={<><Navbar /><Item1/><Footer /></>}/>
        <Route path='/viewmore/2' element={<><Navbar /><Item2/><Footer /></>}/>
        <Route path='/viewmore/3' element={<><Navbar /><Item3/><Footer /></>}/>
        <Route path='/viewmore/4' element={<><Navbar /><Item4/><Footer /></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
