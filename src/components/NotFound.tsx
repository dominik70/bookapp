import { CloseIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
  message: string;
}

export const NotFound = ({ message }: Props) => {
  return (
    <Flex direction='column' alignItems='center' textAlign='center' py={10}>
      <Center bg='red.500' rounded='full' w={16} h={16}>
        <CloseIcon boxSize={6} color='white' />
      </Center>
      <Heading as='h2' size='xl' m={4}>
        Page not found
      </Heading>
      <Text color='gray.500'>{message}</Text>
    </Flex>
  );
};
