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
  Switch
} from '@chakra-ui/react'
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import Warning from './Warning'

function EditUser(props) {
  const [name, setName] = useState(props.name)
  const [email, setEmail] = useState(props.email)
  const [admin, setAdmin] = useState(props.admin)
  const [isError, setIsError] = useState(false)
  const id = props.id
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIsError(false)
    }, '4000')
  }, [isError])

  const handleSubmit = async () => {
    if (name === '' || email === '') {
      console.log('missing parameters')
      setIsError(true)
    } else {
      try {
        const response = await axios.put(`http://localhost:3001/id/${id}`, {
          name: name,
          email: email,
          admin: admin
        })
        console.log(response.data)
        onClose()
        window.location.href = 'http://localhost:3000/admin'
      } catch (error) {
        setIsError(true)
      }
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired={!name}>
              <FormLabel>Full name</FormLabel>
              <Input
                ref={initialRef}
                value={name}
                onChange={e => {
                  setName(e.target.value)
                }}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4} isRequired={!email}>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                placeholder="name@email.com"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Admin</FormLabel>
              <Switch
                isChecked={admin}
                onChange={e => {
                  setAdmin(!admin, e.target.admin)
                }}
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

export default EditUser
