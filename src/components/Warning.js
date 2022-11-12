import React from 'react'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

function Warning(props) {
  return (
    <Alert status="error" style={{ marginTop: '1rem' }}>
      <AlertIcon />
      <AlertTitle>{props.signup? 'Wrong Request': 'Email or password wrong!'}</AlertTitle>
    </Alert>
  )
}

export default Warning
