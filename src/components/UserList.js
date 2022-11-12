import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import user_list from '../assets/user_list.js'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  chakra
} from '@chakra-ui/react'

import {StarIcon, CloseIcon} from '@chakra-ui/icons'

function UserList() {
  const [user, setUser] = useState(user_list)
  const [payload, setPayload] = useState([])

  const fetch = async () => {
      
    try {
      const response = await axios.get(`http://localhost:3001/users`)
      setPayload(response.data)      
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetch()
    
  }, [])
  

  const handleSubmit = e => {
    e.preventDefault()
    {
    }
  }

  const exclude = e => {
    e.preventDefault()
    {
      
    }
  }

  return (
    <>
      <h1>User Manager</h1>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Tbody>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Admin</Th>
              <Th>Equipment</Th>
            </Tr>
          </Tbody>
          {payload.map(user => {
            const { uuid, name, email, admin } = user
            return (
              <Tbody key={uuid}>
                <Tr>
                  <Td>
                    <Button
                      type="submit"
                      colorScheme="red"
                      onClick={exclude}
                    >
                      Remove
                    </Button>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      onClick={handleSubmit}
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{admin? <StarIcon></StarIcon> : <CloseIcon></CloseIcon>}</Td>
                  
                </Tr>
              </Tbody>
            )
          })}
        </Table>
      </TableContainer>
    </>
  )
}

export default UserList
