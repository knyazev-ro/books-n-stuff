export interface Author {
    id: number;
    name: string;
    birthDate: string;
  }
  
  export default function AuthorCard({ author }: { author: Author }) {
    return (
      <div
        key={author.id}
        className="relative  p-6 shadow-xl border border-books-gray-lightest w-72 transform transition-transform hover:scale-105 overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute inset-0  opacity-10 blur-xl rounded-xl"></div>
  
        {/* Author Name */}
        <div className="relative z-10">
          <h3 className="text-books-green-light font-extrabold text-2xl truncate mb-3">
            {author.name}
          </h3>
  
          {/* Author Details */}
          <p className="text-books-gray-light text-sm">
            Дата рождения:{" "}
            <span className="text-books-white font-medium">{author.birthDate}</span>
          </p>
        </div>
  
        {/* Button */}
        <div className="relative z-10 mt-6 flex justify-center">
          <button className="px-5 py-2 bg-books-green-light text-books-black font-semibold rounded-md shadow-md hover:bg-books-green-dark hover:text-books-white transition-all">
            Подробнее
          </button>
        </div>
      </div>
    );
  }
  