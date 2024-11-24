import { useEffect, useState } from "react";
import {getReaders } from "../API/ReaderAPI";
import ReaderCard from "./ReaderCard";
import { useNavigate } from "react-router-dom";

export interface Reader {
    id?: number;
    name: string;
    cardNumber: string;
  }

export default function Readers() {
  const navigate = useNavigate();
  const [readers, setReaders] = useState<Reader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await getReaders();
      setReaders(data);
    } catch (err) {
      setError("Не удалось загрузить данные.");
    } finally {
      setLoading(false);
    }
  };

  // const CountBooksPerReader = async () => {
  //   try {
  //     const data = await getReaderBookCount();
  //     setReaders(data);
  //   } catch (err) {
  //     setError("Не удалось загрузить данные.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className=" h-screen flex justify-center items-center bg-books-gray-dark text-books-green text-2xl">
        Загрузка...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex justify-center items-center text-books-red text-xl">
        Ошибка: {error}
      </div>
    );

    console.log(readers)

  return (
    <div className="w-full min-h-screen bg-books-gray-dark text-books-white p-6">
      <h1 className="flex gap-4 text-3xl font-bold mb-6 text-center text-books-purple">
        Список читателей
        <div
        onClick={()=>navigate('create')} 
        className="w-10 h-10 border-2 border-books-purple transition-all duration-300 ease-in-out rounded-sm hover:w-16 hover:rounded-full ">

        </div>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {readers.map((reader) => (
          <ReaderCard key={reader.id} reader={reader} />
        ))}
      </div>
    </div>
  );
}
