import React from 'react'
import ItemCount from './ItemCount'
import {Card, CardHeader, CardBody, Image, Heading, Text, CardFooter} from '@chakra-ui/react'

const ItemDetail = ({producto}) => {

  return (
    <div>
        <Card align='center' margin={'100px'}>
        <Image
      src={producto.image}
      borderRadius='lg'
    />
  <CardHeader>
    <Heading size='md'>{producto.titulo}</Heading>
  </CardHeader>
  <CardBody>
    <Text>{producto.descripcion}</Text>
    <Text>${producto.precio}</Text>
  </CardBody>
  <CardFooter>
    <ItemCount />
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemDetail