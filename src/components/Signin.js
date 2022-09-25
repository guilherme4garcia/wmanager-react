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

function Signin() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isError = false
  const handleShow = () => {
    setShow(!show)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      console.log('missing parameters')
    } else {
      axios
        .post(`http://52.202.196.108:3002/signin`, {
          login: email,
          password: password
        })

        .then(function (response) {
          console.log(response)
        })
        .then(() => {
          window.location.href = 'http://localhost:3000/'
        })
        .catch(function (error) {
          console.log(error)
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
          <Stack>
            <FormControl isRequired={!email} isInvalid={isError}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="mail@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {!isError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            )
            <FormControl isRequired={!password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShow}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </section>
    </>
  )
}

export default Signin
