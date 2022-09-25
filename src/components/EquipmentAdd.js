import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack
} from '@chakra-ui/react'

function EquipmentAdd() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [ambiente, setAmbiente] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    {
    }
  }

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem'
        }}
      >
        <form>
          <h1
            style={{
              marginBottom: '1rem'
            }}
          >
            Cadastro de Equipamentos
          </h1>
          <Stack>
            <FormControl isRequired={!id}>
              <FormLabel htmlFor="id">Id</FormLabel>
              <Input
                id="id"
                placeholder="1234"
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired={!name}>
              <FormLabel htmlFor="name">Equipment</FormLabel>
              <Input
                id="name"
                placeholder="Monitor"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
              Add
            </Button>
          </Stack>
        </form>
      </section>
    </>
  )
}

export default EquipmentAdd
