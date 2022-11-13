//import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Error from './components/Error'
import Login from './pages/Login'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Equipment from './pages/Equipment'
import Admin from './pages/Admin'
import User from './pages/User'

import theme from './theme'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/equipment/:id" element={<Equipment />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
