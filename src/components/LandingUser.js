import React, { useState } from 'react'
import equipment_list from '../assets/equipment_list'
import axios from 'axios'
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
  TableContainer,
  Heading
} from '@chakra-ui/react'
import { json } from 'react-router-dom'

function LandingUser() {
  const { user } = useGlobalContext()
  const [payload, setPayload] = useState(JSON.parse(localStorage.getItem('item')))
  const [equip, setEquip] = useState([])
  
  const fetch = async () => {
      
    try {
      const response = await axios.get(`http://localhost:3001/equip/${payload.uuid}`)
      setEquip(response.data)      
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetch()
    
  }, [])
  

  return (
    <div>
      <Heading style={{margin: '1rem'}}>Olá, {payload.name.split(' ')[0]}!</Heading>
      <Heading style= {{margin: '1rem'}} size={"md"}>Meus Equipamentos:</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Equipamentos sob minha responsabilidade</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Ambiente</Th>
              <Th>Data Empréstimo</Th>
            </Tr>
          </Thead>
          {equip.map( obj => {
            const { uuid, name, ambiente, dt_entrada } = obj
            return (
              <Tbody key={uuid}>
                <Tr>
                  <Td>{name}</Td>
                  <Td>{ambiente}</Td>
                  <Td>{dt_entrada}</Td>
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
