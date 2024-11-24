import { useEffect, useState } from "react";
import { getAuthors } from "../API/AuthorAPI";
import AuthorCard from "./AuthorCard";
import { useNavigate } from "react-router-dom";

interface Author {
  id: number;
  name: string;
  birthDate: string;
}

export default function Authors() {


    const navigate = useNavigate();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (err) {
      setError("Не удалось загрузить данные.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center bg-books-gray-dark text-books-green text-2xl">
        Загрузка...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center text-books-red text-xl">
        Ошибка: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-books-gray-dark text-books-white p-6 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-books-green flex gap-4">
        Список авторов
        <div
        onClick={()=>navigate('create')} 
        className="w-10 h-10 border-2 border-books-green transition-all duration-300 ease-in-out rounded-sm hover:w-16 hover:rounded-full ">

        </div>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
}
