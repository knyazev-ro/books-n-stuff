export default function BookCard() {
  return (
    <>
      <div className="gap-2 py-2 px-2 items-center flex flex-col  border-2 w-56 h-96">
        <div className="w-full h-5/6">
          <div className="bg-books-gray-lightest w-full h-full"></div>
        </div>
        <div className="h-1/6 w-full">
          <div className=" w-full h-full bg-books-black-light"></div>
        </div>
      </div>
    </>
  );
}
