import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import {Provider} from'react-redux';
 import store from './redux/store'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPasswordPage from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>    
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route  path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route  path='/cart' element={<Cart />} />
      <Route  path='/checkout' element={<Checkout />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/register' element={<Register />} />
      <Route  path='/forget-password' element={<ForgetPasswordPage />} />
      <Route  path='/about' element={<About />} />
      <Route  path='/contact' element={<ContactUs />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
