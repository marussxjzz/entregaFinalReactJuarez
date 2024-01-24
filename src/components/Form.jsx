import React, { useContext, useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon, FormErrorMessage } from '@chakra-ui/react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const { cart } = useContext(CartContext);
    const db = getFirestore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        if (!name || !email) {
            setError("Please fill in all fields.");
            setIsSubmitting(false);
            return;
        }

        const order = {
            client: { name, email },
            items: cart
        };
        
        const ordersCollection = collection(db, "orders");

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
        } catch (error) {
            setError("An error occurred while submitting the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading as='h3' size='lg' mb={4}>
                Please complete the following form
            </Heading>

            {orderId && (
                <Alert status="success" mb={4}>
                    <AlertIcon />
                    Your order ID: {orderId}
                </Alert>
            )}

            {error && (
                <Alert status="error" mb={4}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired isInvalid={!!error && !name}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
                        {!name && <FormErrorMessage>Name is required.</FormErrorMessage>}
                    </FormControl>

                    <FormControl isRequired isInvalid={!!error && !email}>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} value={email} />
                        {!email && <FormErrorMessage>Email is required.</FormErrorMessage>}
                    </FormControl>

                    <Button type='submit' colorScheme='teal' size='md' isLoading={isSubmitting}>
                        Submit Order
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}

export default Form;
