import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Book from "../pages/Book";
import CreateBook from "../pages/CreateBook";
import CreateStyle from "../pages/CreateStyle";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/book" element={<Book />}></Route>
            <Route path="/createbook" element={<CreateBook />}></Route>
            <Route path="/createstyle" element={<CreateStyle />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
