import { useState } from "react";
import { Container, VStack, HStack, Text, Box, Button, IconButton, Input, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaSearch, FaUser, FaBars } from "react-icons/fa";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Text fontSize="2xl">Welcome to Your Investment Platform</Text>;
      case "portfolio":
        return <Text fontSize="2xl">Your Portfolio</Text>;
      case "search":
        return <Text fontSize="2xl">Search for Stocks</Text>;
      case "profile":
        return <Text fontSize="2xl">Your Profile</Text>;
      default:
        return <Text fontSize="2xl">Welcome to Your Investment Platform</Text>;
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={4}>
        <IconButton aria-label="Menu" icon={<FaBars />} onClick={onOpen} />
        <Text fontSize="2xl">Investment Platform</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setCurrentPage("home")} />
          <IconButton aria-label="Portfolio" icon={<FaChartLine />} onClick={() => setCurrentPage("portfolio")} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={() => setCurrentPage("search")} />
          <IconButton aria-label="Profile" icon={<FaUser />} onClick={() => setCurrentPage("profile")} />
        </HStack>
      </HStack>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        {renderContent()}
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button
                w="100%"
                onClick={() => {
                  setCurrentPage("home");
                  onClose();
                }}
              >
                Home
              </Button>
              <Button
                w="100%"
                onClick={() => {
                  setCurrentPage("portfolio");
                  onClose();
                }}
              >
                Portfolio
              </Button>
              <Button
                w="100%"
                onClick={() => {
                  setCurrentPage("search");
                  onClose();
                }}
              >
                Search
              </Button>
              <Button
                w="100%"
                onClick={() => {
                  setCurrentPage("profile");
                  onClose();
                }}
              >
                Profile
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Index;
