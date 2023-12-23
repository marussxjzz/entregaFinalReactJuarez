import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'

const Item = ({ image, titulo, precio, id }) => {
  return (
    <div>
      <Card maxW='sm' marginBottom={'60px'}>
        <CardBody>
          <Image
            src={image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{titulo}</Heading>
            <Text color='green.600' fontSize='2xl'>
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button variant='outline' colorScheme='green'>
              Ver Detalle
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Item