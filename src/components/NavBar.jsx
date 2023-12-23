import React from "react"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { Flex, Box, Heading, Grid,} from '@chakra-ui/react'

const NavBar = () => {

    return (
        <div>
            <Box bg="blackAlpha.900" p={4} color="white">
                <Flex align="center" justify='space-between'>
                    <Heading as="h1" size="lg">
                        Funko's
                    </Heading>

                    <Grid templateColumns='repeat(4, 1fr)' gap={3}>
                        <Flex justify={'center'}><Link to={"/home"}>Home</Link></Flex>
                        <Flex justify={'center'}><Link to={"/category/attackontitan"}>Attack on Titan</Link></Flex>
                        <Flex justify={'center'}><Link to={"/category/barbie"}>Barbie</Link></Flex>
                        <Flex justify={'center'}><Link to={"/category/disney"}>Disney</Link></Flex>
                    </Grid>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Flex>
            </Box>

        </div>

    )
}

export default NavBar