import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { createBook } from "../API/BooksAPI";
import { DatePicker } from "@nextui-org/date-picker";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';

import { getAuthors } from "../API/AuthorAPI";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddBookModal({ isOpen, onClose }: AddBookModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(1971);
  const [selectedValue, setSelectedValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [options, setOptions] = useState();

  console.log(year);

  const handleSubmit = async () => {
    setLoading(true);
    const isAvailable = "1" == selectedValue ? true : false
    try {
      await createBook({ title, author, genre,  year, isAvailable});
      onClose();
    } catch (err) {
      setError("Не удалось добавить книгу.");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getAuthors();
      setOptions(data.map((item: { name: any; }) => ({value:item.name, label:item.name})));
    } catch (err) {
      setError("Не удалось загрузить данные.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(selectedValue)

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Modal isOpen={isOpen} title="Добавить новую книгу" onClose={onClose}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4 ">
        <input
          type="text"
          placeholder="Название книги"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-books-gray-light p-2 rounded w-full text-books-black"
        />
        <input
          type="text"
          placeholder="Автор"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-books-gray-light p-2 rounded w-full text-books-black"
        />
        {/* <SelectBox value={author} setValue={setAuthor} options={options} label={"Автор"}></SelectBox> */}
        <input
          type="text"
          placeholder="Жанр"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border border-books-gray-light p-2 rounded w-full text-books-black"
        />
    <div className="z-50">
        <DatePicker 
        className="dark"
          label="Year"
          onChange={(e) => setYear(e.year)}
          isRequired
        />
    </div>


    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio {...controlProps("1")} color="success" />} label="Доступно" />
        <FormControlLabel value="male" control={<Radio
  {...controlProps("0")}
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/>} label="Недоступно" />
      </RadioGroup>
    </FormControl>


        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-books-green hover:bg-books-green-dark text-white p-2 rounded w-full"
        >
          {loading ? "Добавление..." : "Добавить"}
        </button>
      </div>
    </Modal>
  );
}
