import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
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
import { useFavoriteBooks } from '../contexts/FavoriteBooksContext';
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
  const { favoriteBooks, addFavoriteBook, removeFavoriteBook } =
    useFavoriteBooks();

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
          mt={2}
        >
          {!favoriteBooks.find((book) => book.id === id) ? (
            <Button
              colorScheme='teal'
              leftIcon={<SmallAddIcon />}
              onClick={() => addFavoriteBook(book)}
            >
              add to favorite
            </Button>
          ) : (
            <Button
              colorScheme='red'
              leftIcon={<MinusIcon />}
              onClick={() => removeFavoriteBook(id)}
            >
              remove from favorite
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
