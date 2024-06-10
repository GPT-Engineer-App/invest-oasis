import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="teal" variant="ghost">
            Login
          </Button>
        </Link>
        <Link to="/account">
          <Button colorScheme="teal" variant="ghost">
            Account
          </Button>
        </Link>
        <Link to="/investments">
          <Button colorScheme="teal" variant="ghost">
            Investments
          </Button>
        </Link>
        <Link to="/portfolio">
          <Button colorScheme="teal" variant="ghost">
            Portfolio
          </Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="teal" variant="ghost">
            Register
          </Button>
        </Link>
        <Link to="/contact">
          <Button colorScheme="teal" variant="ghost">
            Contact
          </Button>
        </Link>
        <Link to="/open-account">
          <Button colorScheme="teal" variant="ghost">
            Open Account
          </Button>
        </Link>
        <Link to="/fund-account">
          <Button colorScheme="teal" variant="ghost">
            Fund Account
          </Button>
        </Link>
        <Link to="/account-dashboard">
          <Button colorScheme="teal" variant="ghost">
            Account Dashboard
          </Button>
        </Link>
        <Link to="/account-dashboard">
          <Button colorScheme="teal" variant="ghost">
            Account Details
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
