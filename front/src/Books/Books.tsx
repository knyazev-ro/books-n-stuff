import BookCard from "./BookCard";
import HeroBook from "./HeroBook";

export default function Books() {
  return (
    <div className="flex">
      <div className="px-6 py-4 flex flex-wrap gap-x-6 gap-y-14 justify-center">
        <HeroBook/>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
