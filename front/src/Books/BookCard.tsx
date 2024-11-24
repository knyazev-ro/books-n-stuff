interface BookCardProps {
  title: string;
  year: number;
  genre: string;
  isAvailable: boolean;
}

export default function BookCard({ title, year, genre, isAvailable }: BookCardProps) {
  return (
    <div className="gap-2 py-2 px-2 items-center flex flex-col border-2 w-56 h-96">
      {/* Верхняя часть для обложки книги */}
      <div className="w-full h-5/6 flex items-center justify-center">
        <div className="bg-books-gray-lightest w-full h-full flex items-center justify-center text-center text-sm">
          <span className="text-gray-600">{title}</span>
        </div>
      </div>
      {/* Нижняя часть для деталей */}
      <div className="h-1/6 w-full flex flex-col justify-between p-2 bg-books-black-light text-white">
        <div className="text-xs">
          <strong>Год:</strong> {year}
        </div>
        <div className="text-xs">
          <strong>Жанр:</strong> {genre}
        </div>
        <div className={`text-xs ${isAvailable ? 'text-green-500' : 'text-red-500'}`}>
          {isAvailable ? 'Доступна' : 'Выдана'}
        </div>
      </div>
    </div>
  );
}
