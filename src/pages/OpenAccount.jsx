import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const OpenAccount = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Open a New Account
      </Heading>
      <Text mb={5}>Fill in the details below to open a new account.</Text>
      <Button colorScheme="teal">Start Application</Button>
    </Box>
  );
};

export default OpenAccount;
