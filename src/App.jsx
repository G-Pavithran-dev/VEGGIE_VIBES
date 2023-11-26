import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './components/context'
import SignIn from './components/signin'
import Home from './components/home'
import SignUp from './components/signup'
import Products from './components/products'
import Vegetables from './components/vegetable'
import Fruits from './components/fruit'
import Dairy from './components/dairy'
import Navbar from './components/navbar'
import Cart from './components/addcart'
import Profile from './components/profile'
import AccountSetting from './components/account_settings'
import { Box } from '@mui/material'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [logData, setLogData] = useState({})
  const [badge, setBadge] = useState(0)
  const [isProfile, setIsProfile] = useState(false)
  console.log(isProfile)

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn,
      setIsLoggedIn,
      logData,
      setLogData,
      badge,
      setBadge,
      isProfile,
      setIsProfile,
    }}
    >
      <Provider store={store}>
        <Router>
          {isLoggedIn ? <Profile /> : <Navbar />}
          <Box mt={12} ml={5}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/products" element={<Products />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/dairy" element={<Dairy />} />
              <Route path="/addCart" element={<Cart />} />
              {/* <Route path='/userProfile' element={<UserProfile />} /> */}
              <Route path='/accountSetting' element={<AccountSetting />} />
            </Routes>
          </Box>
        </Router>
      </Provider>
    </AuthContext.Provider>
  )
}

export default App