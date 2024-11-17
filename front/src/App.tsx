import { useState } from "react";
import "./App.css";
import Books from "./Books/Books";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {

  const [sideBar, setSideBar] = useState(false);

  const handeSideBarAppear = () =>{
    setSideBar(prev => !prev);
  }

  return (
    <div className="flex flex-col overflow-y-scroll h-screen scrollbar-hide">
      <Header setSideBar={handeSideBarAppear} />
      <Sidebar isOpen={sideBar} />
      <div className="bg-books-black-dark flex py-20">
        <Books />
      </div>
    </div>
  );
}

export default App;
