import { Box, Heading, Text, Button, FormControl, FormLabel, Input, VStack, Table, Thead, Tbody, Tr, Th, Td, Divider } from "@chakra-ui/react";
import PortfolioChart from "../components/PortfolioChart.jsx";
import { useState } from "react";

function AccountDashboard() {
  const [accountType, setAccountType] = useState("Individual");
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [balance, setBalance] = useState(100000);
  const [availableCash, setAvailableCash] = useState(50000);
  const [amount, setAmount] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleDeposit = () => {
    const newBalance = balance + parseFloat(amount);
    setBalance(newBalance);
    setAvailableCash(availableCash + parseFloat(amount));
    setTransactionHistory([...transactionHistory, { type: "Deposit", amount: parseFloat(amount) }]);
    setAmount("");
  };

  const handleWithdraw = () => {
    if (balance >= amount) {
      const newBalance = balance - parseFloat(amount);
      setBalance(newBalance);
      setAvailableCash(availableCash - parseFloat(amount));
      setTransactionHistory([...transactionHistory, { type: "Withdraw", amount: parseFloat(amount) }]);
      setAmount("");
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Account Information</Heading>
      <Text fontSize="xl" mb={2}>
        Account Type: {accountType}
      </Text>
      <Text fontSize="xl" mb={2}>
        Account Number: {accountNumber}
      </Text>
      <Text fontSize="xl" mb={2}>
        Balance: ${balance.toFixed(2)}
      </Text>
      <Text fontSize="xl" mb={4}>
        Available Cash: ${availableCash.toFixed(2)}
      </Text>
      <VStack spacing={4} align="stretch">
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        </FormControl>
        <Button colorScheme="teal" onClick={handleDeposit}>
          Deposit
        </Button>
        <Button colorScheme="red" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </VStack>
      <Divider my={8} />
      <Heading size="md" mb={4}>
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
      <Divider my={8} />
      <Heading size="md" mb={4}>
        Portfolio Performance
      </Heading>
      <PortfolioChart />
    </Box>
  );
}

export default AccountDashboard;
