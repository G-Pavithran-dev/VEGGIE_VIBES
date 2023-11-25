import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/signin'
import Home from './components/home'
import SignUp from './components/signup'
import Products from './components/products'
import Vegetables from './components/vegetable'
import Fruits from './components/fruit'
import Dairy from './components/dairy'
// import AddCart from './components/addcart'
import Navbar from './components/navbar'
import { useState } from 'react'
import { AuthContext } from './components/context'
import Profile from './components/profile'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import ProductList from './components/productList';
import Cart from './components/addcart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [logData, setLogData] = useState({})
  const [badge, setBadge] = useState(0);

  return (
    <AuthContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, logData, setLogData, badge, setBadge }}
    >
    <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Products />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/dairy" element={<Dairy />} />
            {/* <Route path="/addCart" element={<AddCart />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path='/productList' element={<ProductList />} />
            <Route path='/addCart' element={<Cart />} />
          </Routes>
        </Router>
    </Provider>
      </AuthContext.Provider>
  )
}

export default App
