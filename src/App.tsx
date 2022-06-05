import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { Search } from './components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Book } from './components/Book';
import { NotFound } from './components/NotFound';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Container
        bg='blackAlpha.50'
        py={10}
        px={0}
        maxW='full'
        minH='100vh'
        textAlign='center'
      >
        <Routes>
          <Route path='*' element={<NotFound message='Page not found' />} />
          <Route path='/' element={<Search />} />
          <Route path='/book/:bookId' element={<Book />} />
        </Routes>
      </Container>
    </Router>
  </ChakraProvider>
);
