import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import InitialFocus from './InitialFocus'


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
} from '@chakra-ui/react'

import {StarIcon, CloseIcon} from '@chakra-ui/icons'


function UserList() {
  const [payload, setPayload] = useState([])
  const [id, setId] = useState()

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
  

 

  

  useEffect(() => {
    exclude()
  }, [id])
  
  
  const exclude = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/id/${id}`)
      console.log(response)
      window.location.href = 'http://localhost:3000/admin'
    } catch (error) {
      console.log(error)
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
                  <Td id={uuid}>
                    <Button
                      type="submit"
                      colorScheme="red"
                      onClick={() => setId(uuid)}
                    >
                      Remove
                    </Button>
                    <InitialFocus id={uuid} name={name} email={email} admin={admin} />
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
