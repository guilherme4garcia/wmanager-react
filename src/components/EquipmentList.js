import React from 'react'
import { useState, useEffect } from 'react'

import equipment_list from '../assets/equipment_list.js'

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
import { useParams } from 'react-router-dom'

function EquipmentList() {
  const id = useParams()
  const [equipment, setEquipment] = useState(equipment_list)

  const handleSubmit = e => {
    e.preventDefault()
    {
    }
  }

  return (
    <>
      <h1>Equipment Manager</h1>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>User</Th>
            <Th>Ambiente</Th>
            <Th>Emprestimo</Th>
            <Th>Devolução</Th>
          </Thead>
          {equipment.map(equipment => {
            const { id, name, user, ambiente, emprestimo, devol } = equipment
            return (
              <Tbody>
                <Tr>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{user}</Td>
                  <Td>{ambiente}</Td>
                  <Td>{emprestimo}</Td>
                  <Td>{devol}</Td>
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
                </Tr>
              </Tbody>
            )
          })}
        </Table>
      </TableContainer>
    </>
  )
}

export default EquipmentList
