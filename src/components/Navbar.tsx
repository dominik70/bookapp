import { Box, Center, Link as ChakraLink } from '@chakra-ui/react';
import { NAV_ITEMS } from '../utils/constants';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box>
      <Center
        bg='white'
        color='gray.600'
        py={2}
        px={4}
        borderBottom={1}
        borderStyle='solid'
        borderColor='gray.200'
        gap={6}
        position='fixed'
        w='100vw'
        zIndex='10'
      >
        {NAV_ITEMS.map(({ label, to }) => (
          <ChakraLink
            p={2}
            to={to}
            as={Link}
            fontSize='md'
            color='gray.650'
            _hover={{
              color: 'gray.900',
            }}
            key={label}
          >
            {label}
          </ChakraLink>
        ))}
      </Center>
    </Box>
  );
};
