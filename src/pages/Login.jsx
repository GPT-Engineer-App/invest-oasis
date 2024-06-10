import { Box, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage, InputGroup, InputRightElement } from "@chakra-ui/react";
import bcrypt from "bcryptjs";
import { useState } from "react";
import CryptoJS from "crypto-js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    if (!username) {
      errors.username = "Username is required";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate fetching hashed password from database
      const storedHashedPassword = "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Z7zQ4u8z5K9yK1e1F1e1K";

      bcrypt.compare(password, storedHashedPassword, (err, isMatch) => {
        if (err) {
          console.error(err);
          return;
        }

        if (isMatch) {
          const token = "fake-jwt-token";
          const encryptedToken = CryptoJS.AES.encrypt(token, "secret-key").toString();
          localStorage.setItem("token", encryptedToken);
          window.location.href = "/account";
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Invalid password",
          }));
        }
      });
    }
  };

  return (
    <Box>
      <Heading>Login Page</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.username}>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <FormErrorMessage>{errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} mt={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default Login;
