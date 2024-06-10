import { Box, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import bcrypt from "bcryptjs";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
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
    }
  };

  return (
    <Box>
      <Heading>Login Page</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} mt={4}>
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
