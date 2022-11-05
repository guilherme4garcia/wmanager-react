import React from 'react'
import equipment_list from '../assets/equipment_list'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'

function LandingUser() {
  return (
    <div>
      <h1>Meus Equipamentos</h1>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Ambiente</Th>
              <Th>Data Empréstimo</Th>
            </Tr>
          </Thead>
          {equipment_list.map(equips => {
            const { id, name, ambiente } = equips
            return (
              <Tbody>
                <Tr>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{ambiente}</Td>
                </Tr>
              </Tbody>
            )
          })}
        </Table>
      </TableContainer>
    </div>
  )
}

export default LandingUser
