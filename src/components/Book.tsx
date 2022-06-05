import {
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Spinner,
  Button,
  VStack,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { AddIcon, MinusIcon, ViewIcon } from '@chakra-ui/icons';
import { useFetch } from '../hooks/useFetch';
import { Book as BookType } from '../types';
import { getAuthor, getCover } from '../utils/helpers';
import { API_URL } from '../utils/constants';
import { BookFeature } from './BookFeature';
import { BookModal } from './BookModal';
import { NotFound } from './NotFound';
import { useFavoriteBooks } from '../contexts/FavoriteBooksContext';

export const Book = () => {
  const { bookId } = useParams();
  const {
    data: book,
    isLoading,
    error,
  } = useFetch<BookType>(`${API_URL}/${bookId}`);
  const { favoriteBooks, addFavoriteBook, removeFavoriteBook } =
    useFavoriteBooks();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return (
      <Spinner
        thickness='5px'
        speed='0.8s'
        emptyColor='gray.300'
        color='teal'
        size='xl'
      />
    );
  }

  if (error) {
    return <NotFound message={error} />;
  }

  if (book?.detail === 'Not found.' || !book) {
    return <NotFound message={`Can't find a book with id: ${bookId}`} />;
  }

  const {
    id,
    title,
    resources,
    bookshelves,
    agents,
    languages,
    description,
    subjects,
  } = book;

  const coverUrl = getCover(resources);
  const author = getAuthor(agents);

  return (
    <Flex gap={{ base: 5, lg: 20 }} justify='center' wrap='wrap'>
      {coverUrl && (
        <Image
          rounded='md'
          alt={`cover of ${title}`}
          src={coverUrl}
          w={64}
          alignSelf='flex-start'
        />
      )}
      <Stack spacing={2} maxW='xl'>
        <Heading textAlign='center' as='h1'>
          {title}
        </Heading>
        <BookFeature label='Author' featureList={[author || 'unknown']} />
        <BookFeature label='Bookshelves' featureList={bookshelves} />
        <BookFeature label='Language' featureList={languages} />
        <BookFeature label='Subject' featureList={subjects} />
        <Text color='gray.500' fontSize='lg' wordBreak='break-word'>
          {description}
        </Text>
        <ButtonGroup
          as={VStack}
          spacing={4}
          align={{ base: 'center', sm: 'end' }}
          size='sm'
          colorScheme='teal'
          variant='outline'
        >
          {!favoriteBooks.find((book) => book.id === id) ? (
            <Button
              leftIcon={<AddIcon />}
              onClick={() => addFavoriteBook(book)}
              bg='white'
            >
              add to favorite
            </Button>
          ) : (
            <Button
              colorScheme='red'
              leftIcon={<MinusIcon />}
              onClick={() => removeFavoriteBook(id)}
              bg='white'
            >
              remove from favorite
            </Button>
          )}
          <Button leftIcon={<ViewIcon />} onClick={onOpen} bg='white'>
            read book
          </Button>
        </ButtonGroup>
      </Stack>
      {isOpen && (
        <BookModal
          title={title}
          isOpen={isOpen}
          onClose={onClose}
          resources={resources}
        />
      )}
    </Flex>
  );
};
