import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import CryptoJS from "crypto-js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Username:", username);
    console.log("Hashed Password:", hashedPassword);
    // Simulate API call
    const token = "fake-jwt-token";
    const encryptedToken = CryptoJS.AES.encrypt(token, "secret-key").toString();
    localStorage.setItem("token", encryptedToken);

    navigate("/account");
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={6}>Register</Heading>
      <form onSubmit={handleRegister}>
        <FormControl id="username" mb={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
