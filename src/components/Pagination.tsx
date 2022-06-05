import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Icon,
} from '@chakra-ui/icons';
import { Button, Center, ButtonGroup } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  currentPage: number;
  maxPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ currentPage, maxPage, setPage }: Props) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setPage((prevState) => prevState + 1);
    }
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(maxPage);
  };

  return (
    <ButtonGroup spacing={{ base: 1, md: 2 }} colorScheme='teal' py={6}>
      <Button
        aria-label='first page'
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        <Icon as={ArrowLeftIcon} />
      </Button>
      <Button
        aria-label='previous page'
        px={2}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <Icon as={ChevronLeftIcon} boxSize={8} />
      </Button>
      <Center px={2}>
        {currentPage} / {maxPage}
      </Center>
      <Button
        aria-label='next page'
        px={2}
        onClick={handleNextPage}
        disabled={currentPage === maxPage}
      >
        <Icon as={ChevronRightIcon} boxSize={8} />
      </Button>
      <Button
        aria-label='last page'
        onClick={handleLastPage}
        disabled={currentPage === maxPage}
      >
        <Icon as={ArrowRightIcon} />
      </Button>
    </ButtonGroup>
  );
};
