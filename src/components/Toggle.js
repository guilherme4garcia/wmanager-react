import React from 'react'
import {
    useColorMode,
    Button
} from '@chakra-ui/react'

import {MoonIcon} from '@chakra-ui/icons'

function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
            <MoonIcon >{colorMode === 'light' ? 'Dark' : 'Light'}</MoonIcon>
           
        </Button>
      </header>
    )
}
export default Toggle

