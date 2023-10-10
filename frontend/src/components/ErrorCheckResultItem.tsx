import type { ErrorCheckResult } from '@/types/errorCheck';
import { Text, VStack } from '@chakra-ui/react';

type ErrorCheckResultProps = {
  result: ErrorCheckResult;
};

const ErrorCheckResultItem = ({ result }: ErrorCheckResultProps) => {
  return (
    <VStack>
      <Text fontSize="sm">{result.original}</Text>
      <Text fontSize="sm">{result.problem}</Text>
      <Text fontSize="sm">{result.revised}</Text>
    </VStack>
  );
};

/**
 * Renders a single item in the error check result list.
 * @param {ErrorCheckResult} result - The error check result to render.
 *
 * @example
 * <ErrorCheckResultItem
 *   result={{ original: '...', problem: '...', revised: '...'}}
 * />
 */
export default ErrorCheckResultItem;
