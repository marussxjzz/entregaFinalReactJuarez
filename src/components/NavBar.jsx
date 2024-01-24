import React from "react";
import CartWidget from "./CartWidget";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Heading, Grid, Button } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Box bg="blackAlpha.900" px={4} py={3} color="white" marginBottom={10}>
            <Flex align="center" justify="space-between" wrap="wrap">
                <Heading as="h1" size="lg" my={2}>
                    Funko's
                </Heading>

                <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} alignItems="center">
                    <Button as={RouterLink} to={"/home"} color= 'white' variant="ghost" _hover={{ bg: 'teal.300', color: 'white' }}>Home</Button>
                    <Button as={RouterLink} to={"/category/attackontitan"} color= 'white' variant="ghost" _hover={{ bg: 'teal.300', color: 'white' }}>Attack on Titan</Button>
                    <Button as={RouterLink} to={"/category/barbie"} color= 'white' variant="ghost" _hover={{ bg: 'teal.300', color: 'white' }}>Barbie</Button>
                    <Button as={RouterLink} to={"/category/disney"} color= 'white' variant="ghost" _hover={{ bg: 'teal.300', color: 'white' }}>Disney</Button>
                </Grid>
                
                <RouterLink to={"/cart"}>
                    <CartWidget />
                </RouterLink>
            </Flex>
        </Box>
    );
}

export default NavBar;
