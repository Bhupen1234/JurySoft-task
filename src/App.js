import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App" >
        
  <Routes>
    <Route element={<ProductList/>} path='/'/>

    <Route element={<Checkout/>} path='/checkout'/>
  </Routes>
    


    </div>
  );
}

export default App;
