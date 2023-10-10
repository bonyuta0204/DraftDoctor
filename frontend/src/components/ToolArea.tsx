import { Box, Text, Flex, VStack, Divider, Spinner } from '@chakra-ui/react';
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

  const [isLoading, setIsLoading] = useState(false);

  /**
   * POST to error-check API (/api/error-check) with documentText
   * {
   *  "documentText": "..."
   * }
   */
  const onClickErrorCheck = async () => {
    setIsLoading(true);
    const response = await axios.post('/api/error-check', {
      documentText: documentText,
    });
    setErrorCheckResult(response.data.result);
    setIsLoading(false);
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
          {isLoading ? (
            <VStack justifyContent="center" alignItems="center" w="100%" p={4}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="green.200"
                size="xl"
              />
              <Text fontSize="sm">Loading...</Text>
            </VStack>
          ) : (
            <Text fontSize="sm">{errorCheckResult}</Text>
          )}
        </Flex>
      </VStack>
    </Box>
  );
};

export default ToolArea;
