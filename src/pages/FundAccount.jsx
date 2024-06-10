import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";

function FundAccount() {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="fund-method">
          <FormLabel>Funding Method</FormLabel>
          <Select placeholder="Select method">
            <option value="bank-transfer">Bank Transfer</option>
            <option value="debit-credit-card">Debit/Credit Card</option>
          </Select>
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" placeholder="Enter amount" />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Fund Account
        </Button>
      </VStack>
    </Box>
  );
}

export default FundAccount;
