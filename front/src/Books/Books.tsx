import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import HeroBook from "./HeroBook";
import BooksManagement from "../Modal/BooksManagement";

interface Book {
  id: number;
  title: string;
  year: number;
  genre: string;
  isAvailable: boolean;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modal ,setModal] = useState(false);

  useEffect(() => {
    // Функция для загрузки данных из API
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>("http://localhost:8080/books");
        setBooks(response.data);
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

  return (
    <div className="flex flex-row-reverse">
      <div
      onClick={()=> setModal(prev => !prev)} 
      className=" h-full w-1/12 bg-books-green cursor-pointer hover:bg-books-green-dark">
      </div>
      {modal && <BooksManagement/>}
      <div className="px-6 py-4 flex flex-wrap gap-x-12 gap-y-24 justify-center">
        <HeroBook />
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            year={book.year}
            genre={book.genre}
            isAvailable={book.isAvailable}
          />
        ))}
      </div>
    </div>
  );
}
