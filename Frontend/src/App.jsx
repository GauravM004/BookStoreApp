import React from "react";
import Home from "./../src/home/Home";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import Contacts from "./Contacts/Contacts";
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Contact" element={<Contacts/>}/>


      </Routes>
      </div>
    </>
  );
}

export default App;
