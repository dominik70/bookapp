import { SmallAddIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { Book } from '../types';
import { getAuthor, getCover } from '../utils/helpers';
import { BookFeature } from './BookFeature';

interface Props {
  book: Book;
}

export const BookItem = ({ book }: Props) => {
  const { title, resources, agents, languages } = book;
  const coverUrl = getCover(resources);
  const author = getAuthor(agents);

  return (
    <Flex w='xs' bg='white' shadow='md' rounded='lg'>
      {coverUrl && (
        <Image h={40} src={coverUrl} alt={`cover of ${title}`} rounded='md' />
      )}
      <Flex w={coverUrl ? 2 / 3 : 'full'} p={3} direction='column'>
        <Heading as='h2' size='sm' w='full' noOfLines={3}>
          {title}
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
        >
          <Button
            colorScheme='teal'
            leftIcon={<SmallAddIcon />}
            onClick={() => {}}
          >
            add to favorite
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
