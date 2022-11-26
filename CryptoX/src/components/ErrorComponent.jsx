import React from 'react'
import { Alert, AlertTitle, AlertIcon } from '@chakra-ui/react'
const ErrorComponent = ({message}) => {
  return (
    <Alert status='error' pos={'fixed'} m={'8'} left={'50%'} transform={"translateX(-50%)"} w={'container.lg'} >
        <AlertIcon />
        <AlertTitle>{message}</AlertTitle>
   </Alert>
  )
}

export default ErrorComponent