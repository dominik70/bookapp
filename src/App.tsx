import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { Search } from './components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Book } from './components/Book';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { FavoriteBooks } from './components/FavoriteBooks';
import { FavoriteBooksProvider } from './contexts/FavoriteBooksContext';

export const App = () => (
  <ChakraProvider theme={theme}>
    <FavoriteBooksProvider>
      <Router>
        <Navbar />
        <Container
          bg='blackAlpha.50'
          py={24}
          px={0}
          maxW='full'
          minH='100vh'
          textAlign='center'
        >
          <Routes>
            <Route path='*' element={<NotFound message='Page not found' />} />
            <Route path='/' element={<Search />} />
            <Route path='/favorite' element={<FavoriteBooks />} />
            <Route path='/book/:bookId' element={<Book />} />
          </Routes>
        </Container>
      </Router>
    </FavoriteBooksProvider>
  </ChakraProvider>
);
