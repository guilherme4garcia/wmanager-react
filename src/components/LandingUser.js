import React from 'react'
import equipment_list from '../assets/equipment_list'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'

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
  const { user } = useGlobalContext()

  useEffect(() => {
    console.log(localStorage.getItem('item'))
  }, [user])

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
          
        </Table>
      </TableContainer>
    </div>
  )
}

export default LandingUser
