import { useState } from 'react';
import { createReader } from '../API/ReaderAPI'; // Подключаем функцию для создания читателя

const RegisterReader = () => {
  const [name, setName] = useState('');
//   const [cardNumber, setCardNumber] = useState('');s
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!name) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    try {
      const reader = await createReader(name);
      setMessage(`Читатель ${name} успешно зарегистрирован!`);
      setName('');
    } catch (err) {
      setError('Произошла ошибка при регистрации читателя');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-books-black-dark">
      <form
        onSubmit={handleSubmit}
        className="bg-books-black-dark shadow-lg p-6 flex flex-col gap-6 w-2/3 max-w-xl items-center justify-center border border-books-gray-lightest "
      >
        <h2 className="text-2xl font-extrabold text-books-green text-center mb-4">
          📚 Регистрация читателя
        </h2>

        {/* Сообщения об ошибках или успехе */}
        {error && (
          <div className="text-red-500 bg-red-100 px-4 py-2 rounded-md w-full text-center">
            {error}
          </div>
        )}
        {message && (
          <div className="text-green-500 bg-green-100 px-4 py-2 rounded-md w-full text-center">
            {message}
          </div>
        )}

        {/* Поле для имени */}
        <div className="w-full">
          <label className="text-books-green text-lg mb-2">Имя читателя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-books-gray-dark text-books-white border border-books-gray-lightest"
            placeholder="Введите имя читателя"
            required
          />
        </div>

        {/* Поле для номера карты */}
        {/* <div className="w-full">
          <label className="text-books-green text-lg mb-2">Номер карты</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-3 rounded-lg bg-books-gray-dark text-books-white border border-books-gray-lightest"
            placeholder="Введите номер карты"
            required
          />
        </div> */}

        {/* Кнопка регистрации */}
        <button
          type="submit"
          className="bg-books-green text-white px-6 py-3 rounded-full shadow-md hover:bg-books-green-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-4"
        >
          Зарегистрировать
        </button>
      </form>
    </div>
  );
};

export default RegisterReader;
