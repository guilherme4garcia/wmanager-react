//import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Error from './components/Error'
import Login from './pages/Login'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
