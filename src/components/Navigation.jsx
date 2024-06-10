import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/login" color="white">
          Login
        </Link>
        <Link as={RouterLink} to="/account" color="white">
          Account
        </Link>
        <Link as={RouterLink} to="/investments" color="white">
          Investments
        </Link>
        <Link as={RouterLink} to="/portfolio" color="white">
          Portfolio
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
