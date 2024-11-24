import React, { useState } from "react";
import Modal from "./Modal";
import { searchBooks } from "../API/BooksAPI";

interface SearchBooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBooksModal({ isOpen, onClose }: SearchBooksModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const books = await searchBooks(query);
    setResults(books);
    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} title="Поиск книг" onClose={onClose}>
      <input
        type="text"
        placeholder="Введите название, автора или жанр"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-books-gray-light p-2 rounded w-full mb-4 text-books-black-dark"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-books-green hover:bg-books-green-dark text-white p-2 rounded w-full"
      >
        {loading ? "Поиск..." : "Найти"}
      </button>
      <div className="mt-4 flex flex-col gap-1 overflow-y-scroll h-64 scrollbar-hide">
        {results.map((book) => (
          <p key={book.id} className="text-books-green bg-books-black px-4 py-2 rounded-2xl">
            @ {book.id} {book.title} — {book?.author?.name} ({book.genre}, {book.year})
          </p>
        ))}
      </div>
    </Modal>
  );
}
