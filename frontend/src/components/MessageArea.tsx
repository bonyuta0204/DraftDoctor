import { Box, Textarea, Button, HStack } from '@chakra-ui/react';
//import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';

//const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const MessageArea = () => {
  // const { data, error } = useSWR('/api/messages', fetcher);
  const [documentText, setDocumentText] = useState<string>('');

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    const inputValue = event.target.value;
    setDocumentText(inputValue);
  };

  const sendDocumentContent = () => {
    axios.post('/api/send-message', { documentText });
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

export default MessageArea;
