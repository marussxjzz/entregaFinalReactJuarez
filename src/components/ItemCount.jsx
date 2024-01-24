import React, { useContext, useState } from 'react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ producto }) => {
  const { cart, setCart } = useContext(CartContext);
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const addToCart = (item) => {
    const addedItem = { ...item, contador };
    const newCart = [...cart];
    const isInCart = newCart.find((i) => i.id === item.id);

    if (isInCart) {
      isInCart.contador = isInCart.contador + contador;
      setCart(newCart);
    } else {
      setCart([...cart, addedItem]);
    }
  };

  return (
    <Flex direction="column" align="center">
      <Flex align="center">
        <Button variant="outline" colorScheme="green" size="md" onClick={restar}>
          -
        </Button>
        <Box mx={4}>
          <Text fontSize="xl" fontWeight="bold">
            {contador}
          </Text>
        </Box>
        <Button variant="outline" colorScheme="green" size="md" onClick={sumar}>
          +
        </Button>
      </Flex>
      <Button colorScheme='teal' mt='4' onClick={() => addToCart(producto)}>
        Add to cart
      </Button>
    </Flex>
  );
};

export default ItemCount;
