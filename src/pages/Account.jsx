import { Box, Heading, Text, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Account() {
  const [balance, setBalance] = useState(100000);
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    if (balance >= amount) {
      setBalance(balance - parseFloat(amount));
      setAmount("");
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Account Information</Heading>
      <Text fontSize="xl" mb={4}>
        Balance: ${balance.toFixed(2)}
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
    </Box>
  );
}

export default Account;
