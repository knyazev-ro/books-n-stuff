import { useState } from "react";
import AddBookModal from "./AddBookModal";
import SearchBooksModal from "./SearchBooksModal";

export default function BooksManagement() {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const [isSearchBooksModalOpen, setIsSearchBooksModalOpen] = useState(false);

  return (
    <div className="opacity-90 border border-books-gray-lightest translate-y-48 -translate-x-4 fixed h-48 bg-books-gray-dark text-books-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-books-purple">
        Управление Книгами
      </h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setIsAddBookModalOpen(true)}
          className="bg-books-green hover:bg-books-green-dark text-white p-2 rounded"
        >
          Добавить книгу
        </button>
        <button
          onClick={() => setIsSearchBooksModalOpen(true)}
          className="bg-books-blue hover:bg-books-blue-dark text-white p-2 rounded"
        >
          Поиск книг
        </button>
      </div>
      <AddBookModal
        isOpen={isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
      />
      <SearchBooksModal
        isOpen={isSearchBooksModalOpen}
        onClose={() => setIsSearchBooksModalOpen(false)}
      />
    </div>
  );
}
