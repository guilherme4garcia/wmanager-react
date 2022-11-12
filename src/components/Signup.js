import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Switch
} from '@chakra-ui/react'

import Warning from './Warning.js'


function Signup() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [admin, setAdmin] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setIsError(false)
    }, '4000')
  }, [isError])
  
  
  const handleShow = () => {
    setShow(!show)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      console.log('missing parameters')
      setIsError(true)
    } else {
      axios
        .post(`http://localhost:3001/signup`, {
          name: name,
          email: email,
          password: password,
          admin: admin
        })

        .then(function (response) {
          console.log(response)
        })
        .then(() => {
          window.location.href = 'http://localhost:3000/admin'
        })
        .catch(function (error) {
          if (error.response.status) {
            setIsError(true)
          }
        })
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
            Cadastro de Funcionários
          </h1>
          <Stack>
            <FormControl isRequired={!name}>
              
              <FormLabel htmlFor="Full-name">Full name</FormLabel>
              <Input
                id="full-name"
                placeholder="e.g: John Lennon"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired={!email} isInvalid={isError}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="mail@example.com"
                value={email}
                autoComplete=""
                onChange={e => setEmail(e.target.value)}
              />
              {!isError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
              <FormLabel display={'flex'}>
                <Box style={{marginRight: '0.5rem'}}>Admin:</Box>
                
                <Switch isChecked={admin} onChange={e => {setAdmin(!admin, e.target.admin)}}/>
              </FormLabel>
            )
            <FormControl isRequired={!password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  autoComplete="new-password"
                  onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShow}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
                <FormControl display='flex' alignItems='center'>
                  
                </FormControl>
            <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
          {isError ? <Warning signup='signup'/> : ''}
        </form>
      </section>
    </>
  )
}

export default Signup
