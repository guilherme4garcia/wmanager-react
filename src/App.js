//import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Error from './components/Error'
import Login from './pages/Login'
import Signup from './components/Signup'
import Signin from './components/Signin'
import UserManager from './pages/UserManager'
import Admin from './pages/Admin'
import User from './pages/User'

import theme from './theme'
import EquipManager from './pages/EquipManager'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />    
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/equipment/:id/:name" element={<UserManager />} />
          <Route path="/equipment" element={<EquipManager />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
