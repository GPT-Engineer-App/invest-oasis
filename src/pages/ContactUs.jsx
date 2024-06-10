import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

function ContactUs() {
  return (
    <Box p={4}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl id="email" isRequired mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />
      </FormControl>
      <FormControl id="message" isRequired mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your Message" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default ContactUs;
