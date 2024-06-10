import { Box, Heading, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function AccountDashboard() {
  const [accountType, setAccountType] = useState("Individual");
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [balance, setBalance] = useState(100000);
  const [availableCash, setAvailableCash] = useState(50000);
  const [transactionHistory, setTransactionHistory] = useState([
    { type: "Deposit", amount: 5000 },
    { type: "Withdraw", amount: 2000 },
  ]);

  return (
    <Box p={4}>
      <Heading mb={4}>Account Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl">Account Type: {accountType}</Text>
        <Text fontSize="xl">Account Number: {accountNumber}</Text>
        <Text fontSize="xl">Balance: ${balance.toFixed(2)}</Text>
        <Text fontSize="xl">Available Cash: ${availableCash.toFixed(2)}</Text>
      </VStack>
      <Heading size="md" mt={8} mb={4}>
        Transaction History
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactionHistory.map((transaction, index) => (
            <Tr key={index}>
              <Td>{transaction.type}</Td>
              <Td>${transaction.amount.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default AccountDashboard;
