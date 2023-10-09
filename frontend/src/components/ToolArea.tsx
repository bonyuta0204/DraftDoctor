import { Box, Text, Flex, VStack, Divider } from '@chakra-ui/react';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import ToolButton from '@/components/common/ToolButton';
import { documentState } from '@/atoms/document';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useState } from 'react';

const ToolArea = () => {
  const [documentText] = useRecoilState(documentState);
  // error check result state
  const [errorCheckResult, setErrorCheckResult] = useState<string>();

  /**
   * POST to error-check API (/api/error-check) with documentText
   * {
   *  "documentText": "..."
   * }
   */
  const onClickErrorCheck = async () => {
    const response = await axios.post('/api/error-check', {
      documentText: documentText,
    });
    setErrorCheckResult(response.data.result);
  };

  return (
    <Box id="ToolArea" flex="1" p={1} pt={0}>
      <VStack pt={0} gap="0">
        <Flex w="100%" p={1}>
          <Text fontSize="sm"> Tools </Text>
        </Flex>
        <Divider />
        <Flex w="100%" alignItems="flex-start">
          <ToolButton
            icon={faBug}
            text="Error Check"
            onClick={onClickErrorCheck}
          />
        </Flex>
        <Divider />
        <Flex w="100%" p={1}>
          <Text fontSize="sm"> Result </Text>
        </Flex>
        <Divider />
        <Flex w="100%" alignItems="flex-start" p={2}>
          <Text fontSize="sm">{errorCheckResult}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ToolArea;
