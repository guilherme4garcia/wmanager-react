import React from 'react'
import { Button } from '@chakra-ui/react'

function Logout() {
  const handleClick = () => {
    localStorage.clear()
    window.location.href = 'http://localhost:3000/'
  }
  return <Button onClick={handleClick}>Logout</Button>
}

export default Logout
