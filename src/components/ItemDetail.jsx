import React from 'react';
import ItemCount from './ItemCount';
import { Image, Heading, Text, Flex, Box, Badge } from '@chakra-ui/react';

const ItemDetail = ({ producto }) => {
  return (
    <Box p='4' boxShadow='2xl' borderRadius='lg' bg='gray.50' maxWidth='600px' mx='auto'>
      <Flex direction='column' align='center' gap='4'>
        <Image
          src={producto.image}
          borderRadius='lg'
          maxH='400px'
          objectFit='contain'
          boxShadow='md'
        />
        <Badge colorScheme='teal' variant='subtle'>
          New Arrival
        </Badge>
        <Heading mt='2' size='lg' textAlign='center'>
          {producto.titulo}
        </Heading>
        <Text fontSize='lg' color='gray.600'>
          ID: {producto.id}
        </Text>
        <Text fontSize='xl' fontWeight='bold' color='teal.800'>
          ${producto.precio}
        </Text>
        <ItemCount producto={producto} />
      </Flex>
    </Box>
  );
};

export default ItemDetail;
