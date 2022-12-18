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
import ForgotPassword from './screens/ForgotPassword';
import Activation from './screens/Activation';
import Forgot from './screens/Forgot';
import AdminDashboard from './screens/AdminDashboard';
import CustomersScreen from './screens/Admin/CustomersScreen';
import OrdersAScreen from './screens/Admin/OrdersAScreen';
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
        <Route path='/activation' element={<Activation />} />
        <Route path='/orders' element={currentUser ? <OrdersScreen /> : <Navigate to='/' />} />
        <Route path='/login' element={!currentUser || currentUser.error || currentUser.msg ? <LoginScreen /> : <Navigate to='/' />} />
        <Route path='/register' element={!currentUser || currentUser.error || currentUser.msg ? <SignUpScreen /> : <Navigate to='/' />} />
        <Route path='/forgot' element={!currentUser || currentUser.error || currentUser.msg ? <Forgot /> : <Navigate to='/' />} />
        <Route path='/reset-password' element={!currentUser || currentUser.error || currentUser.msg ? <ForgotPassword /> : <Navigate to='/' />} />

        <Route path='/admin' element={currentUser && currentUser.isAdmin === true ? <AdminDashboard /> : <Navigate to='/' />} />
        <Route path='/admin/orders' element={currentUser && currentUser.isAdmin === true ? <OrdersAScreen /> : <Navigate to='/' />} />
        <Route path='/admin/customers' element={currentUser && currentUser.isAdmin === true ? <CustomersScreen /> : <Navigate to='/' />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
