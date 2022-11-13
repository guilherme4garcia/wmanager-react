import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../services/routes.js'
import DeleteEquip from './DeleteEquip.js'
import EditEquip from './EditEquip.js'

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
import { useParams } from 'react-router-dom'

function EquipmentList() {

  const user = useParams()
  const [equipment, setEquipment] = useState([])

  useEffect(() => {
    fetchEquips()
    console.log(equipment)
  }, [])
  
  const fetchEquips = async () => {
    try {
      const response = await axios.get(`${url}/user/equips/${user.id}`)
      setEquipment(response.data)
      
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    {
    }
  }

  return (
    <>
      <Heading>User: {user.name} </Heading>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Tbody>
            <Tr>
              <Th>Name</Th>
              <Th>Ambiente</Th>
              <Th>Emprestimo</Th>
              <Th>Devolução</Th>
            </Tr>
          </Tbody>
          {equipment.map(equipment => {
            const { uuid, name, ambiente, dt_entrada, dt_saida } = equipment
            return (
              <Tbody key={uuid}>
                <Tr>
                  <Td>{name}</Td>
                  <Td>{ambiente}</Td>
                  <Td>{dt_entrada}</Td>
                  <Td>{dt_saida}</Td>
                  
                  <Td>

                    <DeleteEquip id={uuid} name={name}/>
                    


                    
                    <EditEquip id={uuid} name={name} ambiente={ambiente} emprestimo={dt_entrada} devolucao={dt_saida}/> 
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

export default EquipmentList
