import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Card, Heading, CardBody, Stack, Image, Text, CardFooter, Button, Center, useColorModeValue, Box } from '@chakra-ui/react';

const Cart = () => {

  const { cart, removeItem, totalPrice, emptyCart } = useContext(CartContext);

  const handleEmptyCart = () => {
    emptyCart();
  }
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Center marginBottom={20}>
      <Stack spacing={4} width="80%">
        {cart.map((p) => (
          <Card key={p.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={p.image}
              alt='productImage'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>{p.titulo}</Heading>
                <Text py='2'>{p.category}</Text>
                <Text py='2'>${p.precio}</Text>
                <Text py='2'>Q: {p.contador}</Text>
              </CardBody>

              <CardFooter onClick={() => removeItem(p.id)}>
                <Button variant='solid' colorScheme='teal'>
                  Remove Item
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}

        {cart.length > 0 ?
          <>
            <Text fontSize='2xl'>Total: ${totalPrice()}</Text>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='teal' variant='solid' onClick={handleEmptyCart} >
                Empty Cart
              </Button>
              <Link to={"/cart/order"}>
                <Button colorScheme='teal' variant='solid'>
                  Buy
                </Button>
              </Link>
            </Stack>
          </>
          :
          <Box 
      p={5} 
      bg={bgColor} 
      borderRadius='lg' 
      boxShadow='md' 
      textAlign='center'
    >
      <Stack spacing={4} align='center'>
        <Text fontSize='2xl' fontWeight='bold' color={textColor}>
          Your Cart is Empty
        </Text>
        <Text color={textColor}>
          Looks like you haven't added any products yet. 
          Explore our categories and add something to your cart!
        </Text>
        <Link to="/home">
          <Button 
            colorScheme='teal'
            variant='solid' 
            onClick={handleEmptyCart} 
            size='lg'
          >
            Return to Home
          </Button>
        </Link>
      </Stack>
    </Box>
        }
      </Stack>
    </Center>
  );
};

export default Cart;
