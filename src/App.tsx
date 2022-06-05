import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { Search } from './components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Route path='/' element={<Search />} />
        </Routes>
      </Container>
    </Router>
  </ChakraProvider>
);
