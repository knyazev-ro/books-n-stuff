import { FaBook } from 'react-icons/fa';

export default function Header({setSideBar}) {
  return (
    <header className="px-6 flex items-center justify-between fixed w-full top-0 h-16 bg-books-gray-dark border-b-2 border-books-gray-light shadow-md z-50">
      {/* Меню */}
      <button 
      onClick={setSideBar}
      className="text-books-gray-lightest hover:text-books-green transition duration-200 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Название с логотипом и иконкой книги */}
      <div className="flex items-center space-x-3">
        {/* Иконка книги */}
        <FaBook className="text-books-gray-lightest text-3xl" />
        {/* Текст */}
        <h1 className="text-books-gray-lightest text-center text-3xl font-extrabold tracking-wide font-custom">
          <span className="text-pretty">BOOKS</span>
          <span className="text-books-green">'N'</span>
          <span className="text-pretty">STUFF</span>
        </h1>
      </div>

      {/* Logout */}
      <div className="text-books-gray-lightest hover:text-books-red transition duration-200 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7"
          />
        </svg>
      </div>
    </header>
  );
}
