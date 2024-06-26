import { Box, Heading, Text, Button, FormControl, FormLabel, Input, VStack, Table, Thead, Tbody, Tr, Th, Td, Divider, Select } from "@chakra-ui/react";
import PortfolioChart from "../components/PortfolioChart.jsx";
import { useState } from "react";

function AccountDashboard() {
  const [accountType, setAccountType] = useState("Individual");
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [balance, setBalance] = useState(100000);
  const [availableCash, setAvailableCash] = useState(50000);
  const [amount, setAmount] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);

  const [depositMethod, setDepositMethod] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleDeposit = async () => {
    setShowPaymentForm(true);
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

  const processPayment = async (amount, method) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
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
        <FormControl id="deposit-method" mt={4}>
          <FormLabel>Deposit Method</FormLabel>
          <Select placeholder="Select method" value={depositMethod} onChange={(e) => setDepositMethod(e.target.value)}>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="debit-credit-card">Debit/Credit Card</option>
          </Select>
        </FormControl>
        {!showPaymentForm && (
          <Button colorScheme="teal" mt={4} onClick={handleDeposit}>
            Deposit
          </Button>
        )}
        {showPaymentForm && (
          <>
            <FormControl id="deposit-method" mt={4}>
              <FormLabel>Deposit Method</FormLabel>
              <Select placeholder="Select method" value={depositMethod} onChange={(e) => setDepositMethod(e.target.value)}>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="debit-credit-card">Debit/Credit Card</option>
              </Select>
            </FormControl>
            <Button colorScheme="teal" mt={4} onClick={handleDeposit}>
              Confirm Deposit
            </Button>
          </>
        )}
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
