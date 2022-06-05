import { MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Book } from '../types';
import { getAuthor, getCover } from '../utils/helpers';
import { BookFeature } from './BookFeature';

interface Props {
  book: Book;
}

export const BookItem = ({ book }: Props) => {
  const { id, title, resources, agents, languages } = book;
  const coverUrl = getCover(resources);
  const author = getAuthor(agents);

  return (
    <Flex w='xs' bg='white' shadow='md' rounded='lg'>
      {coverUrl && (
        <ChakraLink to={`/book/${id}`} as={Link}>
          <Image h={40} src={coverUrl} alt={`cover of ${title}`} rounded='md' />
        </ChakraLink>
      )}
      <Flex w={coverUrl ? 2 / 3 : 'full'} p={3} direction='column'>
        <Heading as='h2' size='sm' w='full' noOfLines={3}>
          <ChakraLink to={`/book/${id}`} as={Link}>
            {title}
          </ChakraLink>
        </Heading>
        <Text fontSize='xs'>{author}</Text>
        <Box fontSize='xs'>
          <BookFeature label='Language' featureList={languages} />
        </Box>
        <ButtonGroup
          as={Flex}
          justify='end'
          align='end'
          grow='1'
          size='xs'
          variant='outline'
          mt={4}
        >
          <Button colorScheme='red' leftIcon={<MinusIcon />} onClick={() => {}}>
            remove from favorite
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
