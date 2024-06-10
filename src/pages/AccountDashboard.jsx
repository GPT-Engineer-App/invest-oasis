import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function AccountDashboard() {
  const [accountType, setAccountType] = useState("Individual");
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [balance, setBalance] = useState(100000);
  const [availableCash, setAvailableCash] = useState(50000);

  return (
    <Box p={4}>
      <Heading mb={4}>Account Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl">Account Type: {accountType}</Text>
        <Text fontSize="xl">Account Number: {accountNumber}</Text>
        <Text fontSize="xl">Balance: ${balance.toFixed(2)}</Text>
        <Text fontSize="xl">Available Cash: ${availableCash.toFixed(2)}</Text>
      </VStack>
    </Box>
  );
}

export default AccountDashboard;
