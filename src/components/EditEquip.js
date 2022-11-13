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
  import url from '../services/routes'
  
  import React, { useState, useEffect } from 'react'
  import Warning from './Warning'
  
  function EditEquip(props) {
    const [name, setName] = useState(props.name)
    const [ambiente, setAmbiente] = useState(props.ambiente)
    const [emprestimo, setEmprestimo] = useState(props.emprestimo)
    const [devolucao, setDevolucao] = useState(props.devolucao)
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
      if (ambiente === '') {
        console.log('missing parameters')
        setIsError(true)
      } else {
        try {
          const response = await axios.put(`${url}/update-equip`, {
            id: id,
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
            <ModalHeader>Editar Equipamento</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              
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
  
  export default EditEquip
  