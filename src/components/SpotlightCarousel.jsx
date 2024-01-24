import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Text, Center } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SpotlightCarousel = ({ productos }) => {
    return (
        <Center w="full">
            <Box w="30%" mb={8} boxShadow="2xl" borderRadius="lg" overflow="hidden">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    {productos.map((producto, index) => (
                        <Box key={index} textAlign="center">
                            <Image 
                                src={producto.image} 
                                alt={producto.titulo} 
                                objectFit="contain"
                                h="500px"
                                w="auto"
                                mx="auto"
                            />
                            <Text fontSize="lg" fontWeight="bold" mt={2} mb={10}>{producto.titulo}</Text>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Center>
    );
};

export default SpotlightCarousel;
