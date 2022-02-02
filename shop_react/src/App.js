import './App.css';
import Navbar from './components/Navbar/Navbar';
import Description from './components/Description/Description';
import InfFoto from './ToDo/InfFoto';
import Footer from './ToDo/footer';
import Button from './ToDo/button';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Description/>
     <InfFoto/>
     <Button/>
    <Footer/>
    </div>
  );
}

export default App;
