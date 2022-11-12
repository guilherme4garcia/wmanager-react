import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react'

function DeleteUser(props) {
  const { id, name } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleSubmit = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/id/${id}`)
      console.log(response)
      onClose()
      window.location.href = 'http://localhost:3000/admin'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete User
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete user: {name}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteUser
