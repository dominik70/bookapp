import { MinusIcon } from '@chakra-ui/icons';
import { Button, Center, Container, Flex, Heading } from '@chakra-ui/react';
import { useFavoriteBooks } from '../contexts/FavoriteBooksContext';
import { BookItem } from './BookItem';

export const FavoriteBooks = () => {
  const { favoriteBooks, removeAllFavoriteBooks } = useFavoriteBooks();

  return (
    <Container maxW='4xl'>
      <Heading as='h1' mb={10}>
        Favorite books
      </Heading>

      {favoriteBooks.length === 0 ? (
        <Center>You haven't added any books yet</Center>
      ) : (
        <>
          <Flex gap={5} w='full' justify='center' wrap='wrap'>
            {favoriteBooks.map((book) => (
              <BookItem book={book} key={book.id} />
            ))}
          </Flex>
          <Button
            colorScheme='red'
            size='sm'
            leftIcon={<MinusIcon />}
            variant='outline'
            onClick={removeAllFavoriteBooks}
            mt={10}
            bg='white'
          >
            remove all favorite books
          </Button>
        </>
      )}
    </Container>
  );
};
