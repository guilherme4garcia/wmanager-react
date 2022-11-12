import React from 'react'
import {
    useColorMode,
    Button
} from '@chakra-ui/react'

import {MoonIcon, SunIcon} from '@chakra-ui/icons'



function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        
        <Button onClick={toggleColorMode}>
        {colorMode === 'dark'? <SunIcon></SunIcon>:<MoonIcon></MoonIcon>} 
        </Button>
      </header>
    )
}
export default Toggle

