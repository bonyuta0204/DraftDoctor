import { Box, Input, Button } from "@chakra-ui/react";
//import useSWR from 'swr';
import axios from "axios";

//const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const MessageArea = () => {
  // const { data, error } = useSWR('/api/messages', fetcher);

  const sendMessage = (message: string) => {
    axios.post("/api/send-message", { message });
  };

  return (
    <Box flex="1" p={4}>
      <Box mt={4}>
        <Input placeholder="Type a message" />
        <Button mt={2} onClick={() => sendMessage("Your message here")}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default MessageArea;
