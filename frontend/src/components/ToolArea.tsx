import { Box, Textarea, Button, HStack } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const ToolArea = () => {
  const [documentText, setDocumentText] = useState<string>('');

  const sendDocumentContent = () => {
    axios.post('/api/send-message', { documentText });
  };

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    const inputValue = event.target.value;
    setDocumentText(inputValue);
  };

  return (
    <Box flex="1" p={4}>
      <HStack>
        <Textarea
          placeholder="Type a message"
          onChange={handleInputChange}
          value={documentText}
        />
        <Button mt={2} onClick={() => sendDocumentContent()}>
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default ToolArea;
