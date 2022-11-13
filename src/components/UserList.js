import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'

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
  Heading
} from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'

function UserList() {
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

  return (
    <>
      <Heading>Users:</Heading>
      <br></br>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Tbody>
            <Tr>
              <Th>Equipamentos</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Admin</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tbody>
          {payload.map(user => {
            const { uuid, name, email, admin } = user
            return (
              <Tbody key={uuid}>
                <Tr>
                  <Td>
                    <Button
                      colorScheme={'gray'}
                      onClick={() =>
                        (window.location.href = `http://localhost:3000/equipment/${uuid}`)
                      }
                    >
                      Gerenciar Equipamentos
                    </Button>
                  </Td>

                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{admin ? <StarIcon></StarIcon> : ''}</Td>

                  <Td>
                    <EditUser
                      id={uuid}
                      name={name}
                      email={email}
                      admin={admin}
                    />
                  </Td>
                  <Td>
                    <DeleteUser id={uuid} name={name} />
                  </Td>
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
