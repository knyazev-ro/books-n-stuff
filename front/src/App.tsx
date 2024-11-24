import { useState } from "react";
import "./App.css";
import Books from "./Books/Books";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authors from "./Authors/Authors";
import Readers from "./Readers/Readers";
import BooksManagement from "./Modal/BooksManagement";
import LendReturnBookForm from "./LibraryInterface/LendReturnBookForm";
import RegisterReader from "./Readers/registerreader";
import RegisterAuthor from "./Authors/AuthorRegister";

function App() {

  const [sideBar, setSideBar] = useState(false);

  const handeSideBarAppear = () =>{
    setSideBar(prev => !prev);
  }

  return (
    <div className="flex flex-col overflow-y-scroll h-screen scrollbar-hide">
      <Router>
      <Header setSideBar={handeSideBarAppear} />
      <Sidebar isOpen={sideBar} />
      <div className="bg-books-black-dark flex py-20">
          <Routes>
            <Route path="/" element={<Books/>}/>
            <Route path="authors" element={<Authors/>}/>
            <Route path="authors/create" element={<RegisterAuthor/>}/>
            <Route path="readers" element={<Readers/>}/>
            <Route path="books/management" element={<BooksManagement/>}/>
            <Route path="readers/create" element={<RegisterReader/>}/>            
            <Route path="library" element={<LendReturnBookForm/>}/>
          </Routes>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
