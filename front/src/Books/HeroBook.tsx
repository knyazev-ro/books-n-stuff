import { useState, useEffect } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  year: number;
  genre: string;
  isAvailable: boolean;
  imageUrl?: string; // Для обложки книги
}

export default function HeroBook() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>("http://localhost:8080/books");
        const books = response.data;

        if (books.length > 0) {
          // Выбираем случайную книгу
          const randomBook = books[Math.floor(Math.random() * books.length)];
          setBook(randomBook);
        }
        setLoading(false);
      } catch (err) {
        setError("Не удалось загрузить данные");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!book) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <div className="items-center flex px-10 h-screen w-11/12 border-2 bg-books-gray-dark border-books-gray-lightest">
      <div className="border-2 border-books-gray-lightest w-1/2 h-5/6">
        <img
          className="w-full h-full object-cover"
          src={book.imageUrl || "https://via.placeholder.com/300"}
          alt={book.title}
        />
      </div>
      <div className="justify-center items-center flex flex-col w-1/2 h-5/6">
        <div className="flex flex-col gap-2 w-5/6">
          <div className="font-bold text-books-white lg:text-6xl text-3xl text-wrap truncate">
            {book.title}
          </div>
          <div className="text-white font-semibold text-2xl text-wrap truncate hover:text-clip">
            Жанр: {book.genre} <br />
            Год: {book.year} <br />
            {book.isAvailable ? "Доступна для выдачи" : "На руках"}
          </div>
        </div>
      </div>
    </div>
  );
}
