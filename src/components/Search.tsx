import { useEffect, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { useFetch } from '../hooks/useFetch';
import { API_URL, DEBOUNCE_TIMEOUT } from '../utils/constants';
import { useDebounce } from '../hooks/useDebounce';
import { ApiData } from '../types';
import { Results } from './Results';
import { SearchForm } from './SearchForm';

export const Search = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    query: '',
    order: '',
    language: '',
  });
  const debouncedQuery = useDebounce<string>(filters.query, DEBOUNCE_TIMEOUT);

  const { data, isLoading, error, refetch } = useFetch<ApiData>(
    `${API_URL}?type=Text&search=${debouncedQuery}&page=${page}&ordering=${filters.order}&languages=${filters.language}`,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { value, id } = e.target;
    setFilters((prevState) => ({ ...prevState, [id]: value }));
    setPage(1);
  };

  return (
    <Container maxW='4xl'>
      <Heading as='h1' mb={10}>
        Book app
      </Heading>
      <SearchForm
        filters={filters}
        handleFilterChange={handleFilterChange}
        refetch={refetch}
      />
      {error && <Text>{error}</Text>}
      <Results
        data={data}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
      />
    </Container>
  );
};
