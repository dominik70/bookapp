import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Book } from '../types';

interface Context {
  favoriteBooks: Book[];
  addFavoriteBook: (book: Book) => void;
  removeFavoriteBook: (id: number) => void;
  removeAllFavoriteBooks: () => void;
}

const FavoriteBooksContext = createContext<Context | null>(null);

export const useFavoriteBooks = () => {
  const context = useContext(FavoriteBooksContext);

  if (context === null) {
    throw new Error(
      'useFavoriteBooks must be used within a FavoriteBooksProvider',
    );
  }

  return context;
};

export const FavoriteBooksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage<Book[]>(
    'favorite-books',
    [],
  );

  const addFavoriteBook = (newBook: Book) => {
    setFavoriteBooks((prevState) => [
      newBook,
      ...prevState.filter((book) => book.id !== newBook.id),
    ]);
  };

  const removeFavoriteBook = (id: number) => {
    setFavoriteBooks((prevState) => prevState.filter((book) => book.id !== id));
  };

  const removeAllFavoriteBooks = () => {
    setFavoriteBooks([]);
  };

  const value = {
    favoriteBooks,
    addFavoriteBook,
    removeFavoriteBook,
    removeAllFavoriteBooks,
  };

  return (
    <FavoriteBooksContext.Provider value={value}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};
