import React from 'react'
import { useState, useEffect } from 'react'

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
  Button
} from '@chakra-ui/react'

function UserList() {
  const [user, setUser] = useState(user_list)

  const handleSubmit = e => {
    e.preventDefault()
    {
    }
  }

  return (
    <>
      <h1>User Manager</h1>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Th></Th>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Equipment</Th>
          </Thead>
          {user.map(user => {
            const { id, name, email, equipment } = user
            return (
              <Tbody>
                <Tr>
                  <Td>
                    <Button
                      type="submit"
                      colorScheme="red"
                      onClick={handleSubmit}
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
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  {equipment.map(equip => {
                    return <Td>{equip}</Td>
                  })}
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
