import { SearchIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Select,
  Box,
} from '@chakra-ui/react';
import { LANGUAGES } from '../utils/constants';

interface Props {
  filters: { query: string; order: string; language: string };
  handleFilterChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
  refetch: () => void;
}

export const SearchForm = ({ filters, handleFilterChange, refetch }: Props) => {
  return (
    <FormControl maxW='2xl' mx='auto' mb={5}>
      <FormLabel htmlFor='query'>Book title or author's name:</FormLabel>
      <InputGroup size='lg'>
        <Input
          id='query'
          placeholder='e.g. The Great Gatsby'
          value={filters.query}
          onChange={handleFilterChange}
          bg='white'
        />
        <InputRightElement>
          <IconButton
            colorScheme='teal'
            aria-label='search book'
            icon={<SearchIcon />}
            onClick={refetch}
            type='submit'
          />
        </InputRightElement>
      </InputGroup>
      <InputGroup mt={4}>
        <Box w='50%' mr={4}>
          <FormLabel htmlFor='order'>Order by:</FormLabel>
          <Select
            placeholder='Select order'
            bg='white'
            id='order'
            defaultValue='-downloads'
            onChange={handleFilterChange}
          >
            <option value='-downloads'>Popularity (descending)</option>
            <option value='downloads'>Popularity (ascending)</option>
            <option value='-title'>Title (descending)</option>
            <option value='title'>Title (ascending)</option>
          </Select>
        </Box>
        <Box w='50%'>
          <FormLabel htmlFor='language'>Language:</FormLabel>
          <Select
            placeholder='Select language'
            bg='white'
            id='language'
            onChange={handleFilterChange}
          >
            {LANGUAGES.map((language) => (
              <option value={language} key={language}>
                {language.toUpperCase()}
              </option>
            ))}
          </Select>
        </Box>
      </InputGroup>
    </FormControl>
  );
};
