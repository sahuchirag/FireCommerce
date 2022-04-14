import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import './stylesheets/products.css'
import './stylesheets/layout.css'
import './stylesheets/authentication.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/register' exact element={<RegisterPage />} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children; 
  }
  else {
    return <Navigate to='/login' />;
  }
}