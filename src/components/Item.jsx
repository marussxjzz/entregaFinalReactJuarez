import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react';

const Item = ({ image, titulo, precio, id }) => {
  return (
    <div>
      <Card
        maxW='sm'
        marginBottom='60px'
        border='1px solid #e2e8f0'
        borderRadius='lg'
        overflow='hidden'
        transition='transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: 'xl',
        }}
      >
        <CardBody>
          <Image
            src={image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3' align='center'>
            <Heading size='md'>{titulo}</Heading>
            <Text color='green.600' fontSize='2xl' textAlign='center'>
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent='center'>
          <Link to={`/item/${id}`}>
            <Button variant='solid' colorScheme='teal'>
              Detail
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
