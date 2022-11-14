import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'
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
import Logout from './Logout'

import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('item')) || false

  useEffect(() => {
    console.log(location)
    onClose()
    return () => {
      onClose()
    }
  }, [location])

  return (
    <>
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="" />
        </div>

        <Menu>
          {user.admin ? (
            <div style={{ marginLeft: 'auto' }}>
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
            </div>
          ) : (
            ''
          )}
        </Menu>
        <div style={{ marginLeft: 'auto' }}>
          <Toggle />
        </div>
        {location.pathname == '/' ? '' : <Logout></Logout>}
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
          <Link to="/admin">
            <Button colorScheme="teal">User Manager</Button>
          </Link>
          <Link to="/equipment">
            <Button colorScheme="teal">Equip Manager</Button>
          </Link>
        </Box>
      </Collapse>
    </>
  )
}

export default Navbar
