import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { Box, Button, Input, FormControl, FormLabel, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";
import CryptoJS from "crypto-js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Username:", username);
    console.log("Hashed Password:", hashedPassword);
    // Simulate API call
    const token = "fake-jwt-token";
    const encryptedToken = CryptoJS.AES.encrypt(token, "secret-key").toString();
    localStorage.setItem("token", encryptedToken);

    const loginCredentials = {
      username: username,
      password: password,
    };

    console.log("Login Credentials:", loginCredentials);
    alert(`Your account has been created. \nUsername: ${username} \nPassword: ${password}`);

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
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
