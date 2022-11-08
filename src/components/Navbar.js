import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  IconButton,
  Collapse,
  useDisclosure,
  Box,
  Button
} from '@chakra-ui/react'

import Toggle from './Toggle'

import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const location = useLocation()

  useEffect(() => {
    onClose()
    return () => {
      onClose()
    }
  }, [location])

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1
              className="logotitle"
              style={{
                marginLeft: '1.65rem'
              }}
            >
              Admin
            </h1>
          </div>
        </Link>
        <Menu>
          

          <MenuButton
            ml="auto"
            as={IconButton}
            aria-label="Options"
            onClick={onToggle}
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            colorScheme="teal"
            _focus={{ color: 'white' }}
          />
        </Menu>
        <Toggle/>
      </nav>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="4px"
          color="white"
          mt="0.5"
          bg="#319795"
          rounded="md"
          shadow="md"
          // boxShadow={'0 0 0.2em #39313eff'}
          display="flex"
          justifyContent="space-around"
        >
          <Link to="/">
            <Button colorScheme="teal">Usuários</Button>
          </Link>
          <Link to="/fols">
            <Button colorScheme="teal">Fols</Button>
          </Link>
        </Box>
      </Collapse>
    </>
  )
}

export default Navbar
