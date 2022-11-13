import React, { useState, useEffect } from 'react'
import url from '../services/routes'
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

function DeleteEquip(props) {
  const { id, name } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`${url}/user/equip/remove/${id}`)
      console.log(response)
      onClose()
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Remove
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove equipment: {name}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteEquip
