import React from 'react';
import { Text, VStack, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ToolButtonProps {
  icon: IconDefinition;
  text: string;
  onClick: () => void;
}

const ToolButton: React.FC<ToolButtonProps> = ({ icon, text, onClick }) => {
  return (
    <VStack id="custom-icon" gap={0} p={3} cursor="pointer" onClick={onClick}>
      <Icon as={FontAwesomeIcon} icon={icon} fontSize="3xl" />
      <Text fontSize="sm">{text}</Text>
    </VStack>
  );
};

export default ToolButton;
