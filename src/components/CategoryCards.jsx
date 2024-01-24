import React from 'react';
import { Box, Image, Button, SimpleGrid, Center, Heading } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const CategoryCards = () => {
    const categories = [
        {
            title: "Attack on Titan",
            imageUrl: 'src/images/1447034211-aab06ba43a800bd556307046c37e2b57.png',
            alt: "Attack on Titan",
            url: "/category/attackontitan"
        },
        {
            title: "Barbie",
            imageUrl: 'src/images/barbie-logo-2.png',
            alt: "Barbie",
            url: "/category/barbie"
        },
        {
            title: "Disney",
            imageUrl: 'src/images/Logo_de_Walt_Disney_Pictures.jpeg',
            alt: "Disney",
            url: "/category/disney"
        }
    ];

    return (
        <Center flexDirection="column" my={10}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Categories
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} justifyContent="center">
                {categories.map((category, index) => (
                    <Box key={index} boxShadow="lg" borderRadius="lg" overflow="hidden">
                        <Link to={category.url}>
                        <Button variant="unstyled" w="100%" h="200px" position="relative" overflow="hidden">
                            <Image 
                                src={category.imageUrl} 
                                alt={category.alt} 
                                objectFit="cover"
                                w="100%"
                                h="200px"
                                transition="transform .3s ease-in-out"
                                _hover={{ transform: 'scale(1.1)' }}
                            />
                        </Button>
                        </Link>  
                    </Box>
                ))}
            </SimpleGrid>
        </Center>
    );
};

export default CategoryCards;
