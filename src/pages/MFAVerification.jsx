import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function MFAVerification() {
  const [code, setCode] = useState("");

  const handleSubmit = () => {};

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        MFA Verification
      </Text>
      <Input placeholder="Enter MFA Code" value={code} onChange={(e) => setCode(e.target.value)} mb={4} />
      <Button onClick={handleSubmit}>Verify</Button>
    </Box>
  );
}

export default MFAVerification;
