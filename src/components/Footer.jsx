import React from "react";
import { Box, Center, Text } from '@chakra-ui/react';

function Footer() {

    return (
        <Box as="footer" position="fixed" bottom="0" width="100%" p={5} bg="blackAlpha.900" color="white">
      <Center>
        <Text>&copy; 2023 Mariana Juarez. All rights reserved.</Text>
      </Center>
    </Box>
    )
}

export default Footer