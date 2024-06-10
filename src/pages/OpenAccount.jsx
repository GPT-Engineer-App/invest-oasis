import React from "react";
import { Box, Heading, Text, Button, FormControl, FormLabel, Input, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import { useState } from "react";

const OpenAccount = () => {
  const [accountType, setAccountType] = useState("individual");
  const [formData, setFormData] = useState({
    accountNumber: "",
    balance: "",
    secondaryHolder: "",
    retirementAge: "",
    name: "",
    address: "",
    dateOfBirth: "",
    ssn: "",
    email: "",
    phone: "",
    tin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.accountNumber) errors.accountNumber = "Account Number is required";
    if (!formData.balance) {
      errors.balance = "Initial Balance is required";
    } else if (parseFloat(formData.balance) < 100000) {
      errors.balance = "Initial Balance must be at least $100,000";
    }
    if (accountType === "joint" && !formData.secondaryHolder) errors.secondaryHolder = "Secondary Holder is required";
    if (accountType === "retirement" && !formData.retirementAge) errors.retirementAge = "Retirement Age is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.dateOfBirth) errors.dateOfBirth = "Date of Birth is required";
    if (!formData.ssn) errors.ssn = "Social Security Number is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone Number is invalid";
    }
    if (!formData.tin) errors.tin = "Taxpayer Identification Number (TIN) is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Account Type:", accountType);
      console.log("Form Data:", formData);
      setConfirmationMessage("Your account has been successfully opened.");
    }
  };

  return (
    <Box p={5}>
      {confirmationMessage && (
        <Box mb={4} p={4} bg="green.100" borderRadius="md">
          <Text>{confirmationMessage}</Text>
        </Box>
      )}
      {confirmationMessage && (
        <Box mb={4} p={4} bg="green.100" borderRadius="md">
          <Text>{confirmationMessage}</Text>
        </Box>
      )}
      <Heading as="h1" size="xl" mb={5}>
        Open a New Account
      </Heading>
      <Text mb={5}>Fill in the details below to open a new account.</Text>
      <form onSubmit={handleSubmit}>
        <FormControl as="fieldset" mb={5}>
          <FormLabel as="legend">Account Type</FormLabel>
          <RadioGroup onChange={setAccountType} value={accountType}>
            <Stack direction="row">
              <Radio value="individual">Individual</Radio>
              <Radio value="joint">Joint</Radio>
              <Radio value="retirement">Retirement</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="accountNumber" mb={4} isRequired>
          <FormLabel>Account Number</FormLabel>
          <Input name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
        </FormControl>

        <Text mb={4} color="red.500">
          Minimum deposit requirement for each account type is $100,000
        </Text>
        <FormControl id="balance" mb={4} isRequired>
          <FormLabel>Initial Balance</FormLabel>
          <Input name="balance" value={formData.balance} onChange={handleChange} />
        </FormControl>

        {accountType === "joint" && (
          <FormControl id="secondaryHolder" mb={4} isRequired>
            <FormLabel>Secondary Holder</FormLabel>
            <Input name="secondaryHolder" value={formData.secondaryHolder} onChange={handleChange} />
          </FormControl>
        )}

        {accountType === "retirement" && (
          <FormControl id="retirementAge" mb={4} isRequired>
            <FormLabel>Retirement Age</FormLabel>
            <Input name="retirementAge" value={formData.retirementAge} onChange={handleChange} />
          </FormControl>
        )}

        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>

        <FormControl id="address" mb={4} isRequired>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={formData.address} onChange={handleChange} />
        </FormControl>

        <FormControl id="dateOfBirth" mb={4} isRequired>
          <FormLabel>Date of Birth</FormLabel>
          <Input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </FormControl>

        <FormControl id="ssn" mb={4} isRequired>
          <FormLabel>Social Security Number</FormLabel>
          <Input name="ssn" value={formData.ssn} onChange={handleChange} />
        </FormControl>

        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={formData.email} onChange={handleChange} />
        </FormControl>

        <FormControl id="phone" mb={4} isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </FormControl>

        <FormControl id="tin" mb={4} isRequired>
          <FormLabel>Taxpayer Identification Number (TIN)</FormLabel>
          <Input name="tin" value={formData.tin} onChange={handleChange} />
        </FormControl>

        <Button type="submit" colorScheme="teal">
          Start Application
        </Button>
      </form>
    </Box>
  );
};

export default OpenAccount;
