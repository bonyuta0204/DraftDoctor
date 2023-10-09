import { Box, HStack, Select, Text } from '@chakra-ui/react';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import hljs from 'highlight.js';

const MessageArea = () => {
  const [code, setCode] = useState<string>('// Your code here');
  const [language, setLanguage] = useState<string>('typescript');
  const [autoDetected, setAutoDetected] = useState<boolean>(false);

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
    setCode(newValue);
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setLanguage(event.target.value);
  };

  const onPaste = () => {
    if (!autoDetected) {
      // Detect language using highlight.js
      const detectedLanguage = hljs.highlightAuto(code).language;

      // Update the language state if detected
      if (detectedLanguage) {
        setLanguage(detectedLanguage);
      }

      // Mark as auto-detected so this only runs once
      setAutoDetected(true);
    }
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
        language="typescript"
        theme="vs"
        value={code}
        options={options}
        onChange={onChange}
      />
    </Box>
  );
};

export default MessageArea;
