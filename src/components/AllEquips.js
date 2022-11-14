import React from 'react'
import url from '../services/routes'
import axios from 'axios'
import { useState, useEffect } from 'react'

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

import UpdateEquip from './UpdateEquip'
import DrawerEquip from './DrawerEquip'
import DeleteEquip from './DeleteEquip'

function AllEquips() {
  const [payload, setPayload] = useState([])
  const [users, setUsers] = useState([])

  const fetchEquips = async () => {
    try {
      const response = await axios.get(`${url}/equips`)
      setPayload(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/users`)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEquips()
    fetchUsers()
    console.log(payload)
  }, [])
  return (
    <div>
      <Heading style={{ margin: '1rem' }}>Equipamentos:</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Ambiente</Th>
              <Th>Usuário</Th>
              <Th>Data Empréstimo</Th>
              <Th>Data Devolução</Th>
            </Tr>
          </Thead>

          {payload.map(obj => {
            const { uuid, name, ambiente, dt_entrada, dt_saida, user_id } = obj
            let username
            users.forEach(user => {
              if (user_id === user.uuid) {
                username = user.name
              }
            })
            return (
              <Tbody key={uuid}>
                <Tr>
                  <Td>{name}</Td>
                  <Td>{ambiente}</Td>
                  <Td>{username}</Td>
                  <Td>{dt_entrada}</Td>
                  <Td>{dt_saida}</Td>
                  <Td>
                    <UpdateEquip
                      id={uuid}
                      userlist={users}
                      user={username}
                      ambiente={ambiente}
                      emprestimo={dt_entrada}
                      devolucao={dt_saida}
                      equip={name}
                    ></UpdateEquip>
                    <DeleteEquip
                      id={uuid}
                      name={name}
                      remove={true}
                    ></DeleteEquip>
                  </Td>
                </Tr>
              </Tbody>
            )
          })}
        </Table>
        <div style={{ marginLeft: '1rem' }}>
          <DrawerEquip userlist={users}></DrawerEquip>
        </div>
      </TableContainer>
    </div>
  )
}

/*  */
export default AllEquips
