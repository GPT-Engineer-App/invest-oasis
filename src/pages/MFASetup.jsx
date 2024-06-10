import { Box, Button, Input, Heading, Text } from "@chakra-ui/react";

function MFASetup() {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        MFA Setup
      </Heading>
      <Text mb={2}>Enter your phone number to receive a verification code:</Text>
      <Input placeholder="Phone Number" mb={4} />
      <Button colorScheme="teal">Send Verification Code</Button>
    </Box>
  );
}

export default MFASetup;
