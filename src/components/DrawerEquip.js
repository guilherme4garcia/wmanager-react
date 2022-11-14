import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../services/routes'
import Warning from './Warning'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  FormLabel,
  Select,
  Input,
  useDisclosure,
  Stack
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'

function DrawerEquip(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const list = props.userlist
  const [name, setName] = useState('')
  const [ambiente, setAmbiente] = useState('')
  const [saida, setSaida] = useState('')
  const [owner, setOwner] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsError(false)
    }, '4000')
  }, [isError])

  const newEquip = async () => {
    let userId
    if (owner) {
      list.forEach(element => {
        if (element.name === owner) {
          userId = element.uuid
        }
      })
    }

    try {
      const response = await axios.post(`${url}/new-equip`, {
        name: name,
        user_id: userId,
        ambiente: ambiente,
        devolucao: saida
      })
      onClose()
      window.location.reload()
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
  }

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Novo Equipamento
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Criar novo equipamento
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={firstField}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id="name"
                  placeholder="Notebook Dell"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="ambiente">Ambiente</FormLabel>
                <Input
                  id="ambiente"
                  value={ambiente}
                  onChange={e => setAmbiente(e.target.value)}
                  placeholder="Laboratório 3"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="">
                  <option
                    value={null}
                    onClick={e => setOwner(e.target.value)}
                  ></option>
                  {list.map(user => {
                    return (
                      <option
                        key={user.uuid}
                        value={user.name}
                        onClick={e => setOwner(e.target.value)}
                      >
                        {user.name}
                      </option>
                    )
                  })}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="devolucao">Data Saída</FormLabel>
                <Input
                  id="devolucao"
                  placeholder="YYYY-MM-DD"
                  value={saida}
                  onChange={e => setSaida(e.target.value)}
                />
              </Box>
            </Stack>
          </DrawerBody>

          {isError ? <Warning signup={true} /> : ''}
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={newEquip}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerEquip
