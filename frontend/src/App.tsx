import { Box, Divider } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import EditorArea from '@/components/EditorArea';
import ToolArea from '@/components/ToolArea';

function App() {
  return (
    <Box display="flex" height="100vh" width="100vw" overflow="hidden">
      <Sidebar />
      <EditorArea />
      <Divider orientation="vertical" />
      <ToolArea />
    </Box>
  );
}

export default App;
