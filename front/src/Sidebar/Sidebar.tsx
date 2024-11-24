import { FaBook, FaUserFriends, FaUndo, FaUsers, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({isOpen}:{isOpen:Boolean}) {
  const toggleMenu = () => console.log('Menu item clicked');
  const navigate = useNavigate();

  return (
    <div
      className={`flex z-10 ${
        isOpen ? 'h-full opacity-90' : 'opacity-0 h-0'
      } transition-all duration-300 ease-in-out`}
    >
      {/* Меню */}
      <div
        className={`bg-books-black-dark text-books-gray-lightest h-screen w-64 fixed top-12 left-0 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col py-8 space-y-4 px-4">
          {/* Книги */}
          <button
            className="flex items-center space-x-3 text-lg font-semibold hover:text-books-green transition-colors"
            onClick={()=>navigate("/")}
          >
            <FaBook className="text-books-green text-xl" />
            <span>Книги</span>
          </button>

          {/* Авторы */}
          <button
            className="flex items-center space-x-3 text-lg font-semibold hover:text-books-green transition-colors"
            onClick={()=>navigate("authors")}
          >
            <FaUsers className="text-books-green text-xl" />
            <span>Авторы</span>
          </button>

          {/* Читатели */}
          <button
            className="flex items-center space-x-3 text-lg font-semibold hover:text-books-green transition-colors"
            onClick={()=>navigate("readers")}
          >
            <FaUserFriends className="text-books-green text-xl" />
            <span>Читатели</span>
          </button>

          {/* Возврат */}
          <button
            className="flex items-center space-x-3 text-lg font-semibold hover:text-books-green transition-colors"
            onClick={()=> navigate('library')}
          >
            <FaUndo className="text-books-green text-xl" />
            <span>Библиотека</span>
          </button>
        </div>
      </div>
    </div>
  );
}
