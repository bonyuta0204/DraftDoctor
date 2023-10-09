import { Box, HStack, Select, Text } from '@chakra-ui/react';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const MessageArea = () => {
  const [documentText, setDocumentText] = useState<string>('// Your text here');
  const [language, setLanguage] = useState<string>('plaintext');

  const options = {
    selectOnLineNumbers: true,
  };

  const languageOptions: { label: string; code: string }[] = [
    {
      label: 'Plain Text',
      code: 'plaintext',
    },
    {
      label: 'Markdown',
      code: 'markdown',
    },
  ];

  const onChange = (newValue: string) => {
    setDocumentText(newValue);
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box flex="1" p={4}>
      <HStack p={2}>
        <Text fontSize="sm">Select Language:</Text>
        <Text fontSize="sm">{language}</Text>
        <Select
          fontSize="sm"
          w={44}
          h={8}
          p={1}
          placeholder="Select Language"
          value={language}
          onChange={handleChange}
        >
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </Select>
      </HStack>
      <MonacoEditor
        width="800"
        height="800"
        language={language}
        theme="vs"
        value={documentText}
        options={options}
        onChange={onChange}
      />
    </Box>
  );
};

export default MessageArea;
