import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Homescreen />} />
        <Route path='/cart' element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
