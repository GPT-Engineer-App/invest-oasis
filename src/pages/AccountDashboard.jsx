import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AccountDashboard = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl">
        Account Dashboard
      </Heading>
      <Text mt={4}>Welcome to your account dashboard. Here you can manage your account settings, view your investments, and more.</Text>
    </Box>
  );
};

export default AccountDashboard;
