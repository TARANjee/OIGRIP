import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { useSelector } from 'react-redux';
import OrdersScreen from './screens/OrdersScreen';
import 'bootstrap'
import PaymentSuccess from './screens/PaymentSuccess';

function App() {
  const User = useSelector(state => state.userReducer)

  const { currentUser } = User

  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Homescreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/orders' element={currentUser ? <OrdersScreen /> : <Navigate to='/' />} />
        <Route path='/login' element={!currentUser || currentUser.error ? <LoginScreen /> : <Navigate to='/' />} />
        <Route path='/register' element={!currentUser || currentUser.error ? <SignUpScreen /> : <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
