import React from 'react'
import {Spinner} from '@chakra-ui/react'

const Loader = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',  
      width: '100vw', 
      position: 'fixed',  
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',  
      zIndex: 9999,  
    }}
  >
    <Spinner size='xl' />
  </div>
  )
}

export default Loader