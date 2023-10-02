import { Box } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import MessageArea from "@/components/MessageArea";

function App() {
  return (
    <Box display="flex" height="100vh" width="100vw">
      <Sidebar />
      <MessageArea />
    </Box>
  );
}

export default App;
