export interface Reader {
    id?: number;
    name: string;
    cardNumber: string;
    borrowedBooksCount: number;
  }
  
  export default function ReaderCard({ reader }: { reader: Reader }) {
    return (
      <div className="relative border border-books-gray-lightest p-6 shadow-lg text-books-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-72 overflow-hidden">
        {/* Decorative background accent */}
        <div className="absolute inset-0 opacity-20 rounded-xl blur-2xl transform scale-110"></div>
  
        {/* Main content */}
        <div className="relative z-10">
          <h2 className="font-extrabold text-2xl truncate text-books-purple">
            <span className="text-books-yellow">@</span>
            {reader.id} - {reader.name}
          </h2>
          <p className="text-books-gray-light text-sm mt-2">
            <span className="font-medium text-books-yellow">Номер карты:</span> {reader.cardNumber}
          </p>
          <p className="text-books-gray-light text-sm mt-1">
            <span className="font-medium text-books-purple">Книг на руках:</span> {reader.borrowedBooksCount}
          </p>
        </div>
  
        {/* Call to action button */}
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 bg-books-purple rounded-md text-books-white font-medium shadow-md hover:bg-books-yellow hover:text-books-gray-dark transition-colors duration-200">
            Подробнее
          </button>
        </div>
      </div>
    );
  }
  