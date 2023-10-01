// src/components/Sidebar.tsx
import { Box, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box width="300px" bg="gray.200" p={4}>
      <Text fontWeight="bold">Channels</Text>
      <Text># General</Text>
      <Text># Random</Text>
    </Box>
  );
};

export default Sidebar;
