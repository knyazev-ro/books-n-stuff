import apiClient from './apiClient';

// Типы для книг
export interface Book {
  id?: number; // `id` может быть отсутствующим при создании книги
  title: string;
  genre: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

// Получить список всех книг
export const getBooks = async (): Promise<Book[]> => {
  const response = await apiClient.get('/books');
  return response.data;
};

// Добавить новую книгу
export const createBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
  console.log(book)
  const response = await apiClient.post('/books', book);
  return response.data;
};

// Найти книги по названию, автору или жанру
export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await apiClient.get('/books/search', { params: { search: query } });
  return response.data;
};

// Проверить доступность книг
export const checkAvailability = async (): Promise<Book[]> => {
  const response = await apiClient.get('/books/availability');
  return response.data;
};
