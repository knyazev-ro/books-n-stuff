import { useState, useEffect } from "react";
import { lendBook, returnBook } from "../API/libraryActionsAPI";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";
import SelectBox from "../Components/SelectBox";
import { getReaders } from "../API/ReaderAPI";
import { getBooks, Book } from "../API/BooksAPI";
import BookCard from "../Books/BookCard";

export default function LendReturnBookForm() {

    interface Reader {
        borrowedBooks: any;
        id?: number;
        name: string;
        cardNumber: string;
      }

  const [readerCard, setReaderCard] = useState<string | "">("");
  const [bookId, setBookId] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState("lend");

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [readers, setReaders] = useState<Reader[]>([]);

  const [booksOptions, setBooksOptions] = useState<{ value: number | undefined; label: any; }[]>();
  const [readersOptions, setReadersOptions] = useState<{ value: string | undefined; label: any; }[]>();

const [currentBook, setCurrentBook] = useState<Book>();

  const fetchData = async () => {
    try {
      const data = await getReaders();
      setReaders(data);
      setReadersOptions(data.map((item) => ({value: item.cardNumber, label:item.name})));
    } catch (err) {
      setError("Не удалось загрузить данные.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response);
      setLoading(false);
    } catch (err) {
      setError("Не удалось загрузить данные");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBooks();
  },[readerCard, bookId]);

  useEffect(()=>{
    if(selectedValue =="lend")
        setBooksOptions(books.filter(item => item.isAvailable).map((item) => ({value: item?.id ?? 0, label:item.title})));
    else{
        console.log(readers.filter(item => item.cardNumber === readerCard)[0])
        setBooksOptions(readers.filter(item => item.cardNumber === readerCard)[0]?.borrowedBooks?.map((item) => ({value: item?.id ?? 0, label:item.title})));
    }

  },[selectedValue, readerCard]);

  useEffect(()=>{
    setCurrentBook(books.filter(item => item?.id === bookId)[0])
  }, [bookId]);

  console.log(books);
  console.log(readers);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!readerCard || !bookId) {
      setError("Необходимо указать ID читателя и книги.");
      return;
    }

    try {
      if (selectedValue === "lend") {
        await lendBook(readerCard, bookId);
        setMessage(`Книга с ID ${bookId} выдана читателю с ID ${readerCard}.`);
      } else {
        await returnBook(readerCard, bookId);
        setMessage(
          `Книга с ID ${bookId} возвращена читателем с ID ${readerCard}.`
        );
      }
      setError(null);
      setReaderCard("");
      setBookId("");
    } catch {
      setError("Произошла ошибка при выполнении операции.");
      setMessage(null);
    }
  };

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="flex gap-10 items-center justify-center w-screen h-screen">
        <div>
            {<BookCard title={currentBook?.title ?? ""} year={currentBook?.year ?? 1971} genre={currentBook?.genre ?? ""} isAvailable={currentBook?.isAvailable ?? true}/>}
        </div>
      <form
        onSubmit={handleSubmit}
        className="bg-books-black-dark shadow-md rounded-lg p-4 flex flex-col gap-4 w-1/2 h-96 items-center justify-center border border-books-gray-lightest"
      >
        <h2 className="text-xl font-semibold text-books-green text-center">
          Выдача/Возврат книги
        </h2>
        {error && <div className="text-red-500">{error}</div>}
        {message && <div className="text-green-500">{message}</div>}
        <div className="flex gap-4">
            <SelectBox value={readerCard} setValue={setReaderCard} options={readersOptions} label={"Читатель"}></SelectBox>
            <SelectBox value={bookId} setValue={setBookId} options={booksOptions} label={"Книги"}></SelectBox>
        </div>
        <div className="flex gap-4 items-center text-books-gray-lightest">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="lend"
                control={<Radio {...controlProps("lend")} color="success" />}
                label="Выдать"
              />
              <FormControlLabel
                value="return"
                control={
                  <Radio
                    {...controlProps("return")}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Вернуть"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <button
          type="submit"
          className="bg-books-green text-white px-4 py-2 rounded hover:bg-books-green-dark"
        >
          Подтвердить
        </button>
      </form>
    </div>
  );
}
