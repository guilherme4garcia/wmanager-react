import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  FormControl,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Switch
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import axios from 'axios'
import url from '../services/routes'
import React, { useState, useEffect } from 'react'
import Warning from './Warning'

function UpdateEquip(props) {
  const [user, setUser] = useState(props.user)
  const list = props.userlist
  const [equip, setEquip] = useState(props.equip)
  const [ambiente, setAmbiente] = useState(props.ambiente)
  const [emprestimo, setEmprestimo] = useState(props.emprestimo)
  const [devolucao, setDevolucao] = useState(props.devolucao)
  const [isError, setIsError] = useState(false)
  const id = props.id
  const { isOpen, onOpen, onClose } = useDisclosure()
  const key = 0

  const getKey = key => {
    return key++
  }

  const initialRef = React.useRef()
  const finalRef = React.useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIsError(false)
    }, '4000')
  }, [isError])

  const handleSubmit = async () => {
    let userId
    if (user) {
      list.forEach(element => {
        if (element.name === user) {
          userId = element.uuid
        }
      })
    }
    try {
      const response = await axios.put(`${url}/update-user`, {
        id: id,
        user: userId,
        ambiente: ambiente,
        emprestimo: emprestimo,
        devolucao: devolucao
      })
      console.log(response.data)
      onClose()
      window.location.reload()
    } catch (error) {
      setIsError(true)
    }
  }

  return (
    <>
      <Button colorScheme={'blue'} onClick={onOpen}>
        Editar
      </Button>
      {/* <Button ml={4} ref={finalRef}>
          </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Equipamento: {equip}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired={!ambiente}>
              <FormLabel>Usuário</FormLabel>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {user}
                </MenuButton>
                <MenuList>
                  {list.map(user => {
                    return (
                      <MenuItem key={getKey(key)}>
                        <MenuButton
                          value={user.name}
                          onClick={e => {
                            setUser(e.target.value)
                          }}
                          minH="48px"
                        >
                          {user.name}
                        </MenuButton>
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </Menu>
            </FormControl>

            <FormControl mt={4} isRequired={!ambiente}>
              <FormLabel>Ambiente</FormLabel>
              <Input
                value={ambiente}
                onChange={e => {
                  setAmbiente(e.target.value)
                }}
                placeholder="Laboratório 2"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Emprestimo</FormLabel>
              <Input
                value={emprestimo}
                onChange={e => {
                  setEmprestimo(e.target.value)
                }}
                placeholder="YYYY-MM-DD"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Devolução</FormLabel>
              <Input
                value={devolucao}
                onChange={e => {
                  setDevolucao(e.target.value)
                }}
                placeholder="YYYY-MM-DD"
              />
            </FormControl>
          </ModalBody>
          {isError ? <Warning signup={true} /> : ''}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateEquip
