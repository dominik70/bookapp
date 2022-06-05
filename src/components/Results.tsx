import { Flex, Spinner, Text } from '@chakra-ui/react';
import { ApiData } from '../types';
import { BookItem } from './BookItem';
import { BOOKS_PER_PAGE } from '../utils/constants';
import { Pagination } from './Pagination';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  data: ApiData | null;
  isLoading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Results = ({ data, isLoading, page, setPage }: Props) => {
  if (isLoading) {
    return (
      <Spinner
        thickness='5px'
        speed='0.8s'
        emptyColor='gray.300'
        color='teal'
        size='xl'
        mt={10}
      />
    );
  }

  if (!data || data.results.length === 0 || data.count === 0) {
    return <Text>No books found</Text>;
  }

  return (
    <>
      <Pagination
        currentPage={page}
        maxPage={Math.ceil(data.count / BOOKS_PER_PAGE)}
        setPage={setPage}
      />
      <Flex gap={5} w='full' justify='center' wrap='wrap'>
        {data.results.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </Flex>
      <Pagination
        currentPage={page}
        maxPage={Math.ceil(data.count / BOOKS_PER_PAGE)}
        setPage={setPage}
      />
    </>
  );
};
