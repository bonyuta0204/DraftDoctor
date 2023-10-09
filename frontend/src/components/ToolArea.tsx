import { Box, Text, Flex, VStack, Divider } from '@chakra-ui/react';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import ToolButton from '@/components/common/ToolButton';

const ToolArea = () => {
  const onClickErrorCheck = () => {
    console.log('error check clicked');
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
      </VStack>
    </Box>
  );
};

export default ToolArea;
